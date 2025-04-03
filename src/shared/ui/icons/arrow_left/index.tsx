type Props = {
	size?: number;
	className?: string;
};

export const ArrowLeftIcon = ({ size, className }: Props) => (
	<svg
		xmlns='http://www.w3.org/2000/svg'
		width={size ? size : '1em'}
		height={size ? size : '1em'}
		viewBox='0 -960 960 960'
		fill='currentColor'
	>
		<path d='M366.92-213.46 100-480.38l266.92-266.93 41.77 41.77-194.54 195.16h646.23v59.99H214.54l195.15 195.16-42.77 41.77Z' />
	</svg>
);
