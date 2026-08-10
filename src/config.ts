export const SITE = {
	title: 'Mannschaftsmappe',
	team: 'SV Urfahr U11',
	description: 'Alles Wichtige für Spielerinnen, Spieler und Eltern auf einen Blick.',
};

function basePath(): string {
	const base = import.meta.env.BASE_URL;
	return base.endsWith('/') ? base : `${base}/`;
}

export function pagePath(path = ''): string {
	const normalizedPath = path.replace(/^\/+|\/+$/g, '');

	return normalizedPath ? `${basePath()}${normalizedPath}/` : basePath();
}

export function assetPath(path: string): string {
	return `${basePath()}${path.replace(/^\/+/, '')}`;
}
