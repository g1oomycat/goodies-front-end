type Props = {
	size?: number;
	className?: string;
};

export const LikeIcon = ({ size, className }: Props) => (
	<svg
		xmlns='http://www.w3.org/2000/svg'
		width={size ? size : '1em'}
		height={size ? size : '1em'}
		viewBox='0 -960 960 960'
		fill='currentColor'
	>
		<path d='m480-144-50-45q-100-89-165-152.5t-102.5-113Q125-504 110.5-545T96-629q0-89 61-150t150-61q49 0 95 21t78 59q32-38 78-59t95-21q89 0 150 61t61 150q0 43-14 83t-51.5 89q-37.5 49-103 113.5T528-187l-48 43Z' />

		<path d='m480-241q93-83 153-141.5t95.5-102Q764-528 778-562t14-67q0-59-40-99t-99-40q-35 0-65.5 14.5T535-713l-35 41h-40l-35-41q-22-26-53.5-40.5T307-768q-59 0-99 40t-40 99q0 33 13 65.5t47.5 75.5q34.5 43 95 102T480-241Zm0-264Z' />
	</svg>
);
