export const COLORS = {
	white: '#fff',
	black: 'black',
	pink: '#ef9cc1',
	red: '#e20613',
} as const;

export type ColorType = keyof typeof COLORS;
