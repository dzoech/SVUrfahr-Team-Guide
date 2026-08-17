import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import test from 'node:test';

const calendarPage = await readFile(
	new URL('../dist/termine/index.html', import.meta.url),
	'utf8',
);

test('labels the calendar as upcoming matches', () => {
	assert.match(calendarPage, /<h2[^>]*>Nächste Matches<\/h2>/);
});

test('shows when the calendar was last updated', () => {
	assert.match(
		calendarPage,
		/Zuletzt aktualisiert:\s*<time datetime="[^"]+"[^>]*>[^<]+ Uhr<\/time>/,
	);
});
