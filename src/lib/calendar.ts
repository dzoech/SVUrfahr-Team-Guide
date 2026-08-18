import ical, { type CalendarComponent, type ParameterValue, type VEvent } from 'node-ical';

export const CALENDAR_URL =
	import.meta.env.CALENDAR_URL ??
	'https://www.fussballoesterreich.at/netzwerk/icalendar/670725461856634215_100092~2014610470016132458-T.ics';

export const CALENDAR_SUBSCRIPTION_URL = CALENDAR_URL.replace(/^https:/, 'webcal:');

const HIDDEN_EVENT_IDS = new Set(['4165292']);
const CALENDAR_TEAM_NAME = 'Urfahr U11';

export interface CalendarEvent {
	id: string;
	title: string;
	matchSide?: 'home' | 'away';
	opponent?: string;
	location: string;
	start: Date;
	end?: Date;
	allDay: boolean;
}

let upcomingEventsPromise: Promise<CalendarEvent[]> | undefined;

function isEvent(component: CalendarComponent | undefined): component is VEvent {
	return component?.type === 'VEVENT';
}

function unwrap(value: ParameterValue | undefined): string {
	if (!value) {
		return '';
	}

	return typeof value === 'string' ? value : value.val;
}

function repairMojibake(value: string): string {
	if (!value.includes('Ã') && !value.includes('Â')) {
		return value;
	}

	const repaired = Buffer.from(value, 'latin1').toString('utf8');
	return repaired.includes('\uFFFD') ? value : repaired;
}

function formatMatch(value: string): Pick<CalendarEvent, 'title' | 'matchSide' | 'opponent'> {
	const [homeTeam, awayTeam] = value.split(/\s+:\s+/, 2);

	if (homeTeam === CALENDAR_TEAM_NAME && awayTeam) {
		return { title: `Heimspiel vs ${awayTeam}`, matchSide: 'home', opponent: awayTeam };
	}
	if (awayTeam === CALENDAR_TEAM_NAME && homeTeam) {
		return { title: `Auswärtsspiel vs ${homeTeam}`, matchSide: 'away', opponent: homeTeam };
	}

	return { title: value };
}

function dateKeyInVienna(date: Date): string {
	const parts = new Intl.DateTimeFormat('en-CA', {
		year: 'numeric',
		month: '2-digit',
		day: '2-digit',
		timeZone: 'Europe/Vienna',
	}).formatToParts(date);
	const values = Object.fromEntries(parts.map(({ type, value }) => [type, value]));

	return `${values.year}-${values.month}-${values.day}`;
}

async function loadUpcomingEvents(): Promise<CalendarEvent[]> {
	const response = await fetch(CALENDAR_URL, {
		headers: { Accept: 'text/calendar' },
	});

	if (!response.ok) {
		throw new Error(`Kalender konnte nicht geladen werden: HTTP ${response.status}`);
	}

	const parsed = ical.sync.parseICS(await response.text());
	const now = new Date();
	const today = dateKeyInVienna(now);

	return Object.values(parsed)
		.filter(isEvent)
		.filter((event) => !HIDDEN_EVENT_IDS.has(event.uid))
		.filter((event) => {
			if (event.status === 'CANCELLED') {
				return false;
			}
			if (event.start.dateOnly) {
				return dateKeyInVienna(event.start) >= today;
			}

			const effectiveEnd = event.end?.getTime() ?? event.start.getTime() + 3 * 60 * 60 * 1000;
			return effectiveEnd >= now.getTime();
		})
		.sort((left, right) => left.start.getTime() - right.start.getTime())
		.map((event) => {
			const match = formatMatch(repairMojibake(unwrap(event.summary)));

			return {
				id: event.uid,
				...match,
				location: repairMojibake(unwrap(event.location)),
				start: event.start,
				end: event.end,
				allDay: event.start.dateOnly === true,
			};
		});
}

export async function getUpcomingEvents(limit?: number): Promise<CalendarEvent[]> {
	upcomingEventsPromise ??= loadUpcomingEvents();
	const events = await upcomingEventsPromise;

	return limit === undefined ? events : events.slice(0, limit);
}
