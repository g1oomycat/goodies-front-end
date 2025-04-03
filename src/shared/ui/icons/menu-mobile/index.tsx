type Props = {
	size?: number;
	className?: string;
};

export const MenuMobileIcon = ({ size }: Props) => (
	<svg
		xmlns='http://www.w3.org/2000/svg'
		width={size ? size : '1em'}
		height={size ? size : '1em'}
		viewBox='0 0 25 25'
		fill='currentColor'
	>
		<path d='M3 4h19v1.5.5H3zm0 8h19v1.5.5H3zm0 8h19v1.5.5H3z' />
	</svg>
);
