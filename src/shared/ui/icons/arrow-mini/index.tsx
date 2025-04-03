type Props = {
	size?: number;
	direction: 'top' | 'right' | 'bottom' | 'left';
};
const objDirection = {
	top: '-90deg',
	right: '0deg',
	bottom: '90deg',
	left: '180deg',
} as const;

export const ArrowMiniIcon = ({ size = 20, direction }: Props) => {
	return (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			width={size ? size : '1em'}
			height={size ? size : '1em'}
			viewBox='0 -960 960 960'
			fill='currentColor'
			style={{ rotate: objDirection[direction] }}
		>
			<path d='m321-80-71-71 329-329-329-329 71-71 400 400L321-80Z' />
		</svg>
	);
};
