type Props = {
	height?: number;
	className?: string;
};

const DEFAULT_HEIGHT = 20;

export const FilterIcon = ({ height = DEFAULT_HEIGHT }: Props) => (
	<svg
		xmlns='http://www.w3.org/2000/svg'
		height={height}
		viewBox='0 -960 960 960'
		fill='currentColor'
	>
		<path d='M400-240v-80h160v80H400ZM240-440v-80h480v80H240ZM120-640v-80h720v80H120Z' />
	</svg>
);
