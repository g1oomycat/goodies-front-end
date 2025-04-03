type Props = {
	size?: number;
};

export const ArrowRightIcon = ({ size }: Props) => (
	<svg
		xmlns='http://www.w3.org/2000/svg'
		width={size ? size : '1em'}
		height={size ? size : '1em'}
		viewBox='0 -960 960 960'
		fill='currentColor'
	>
		<path d='m593.46-213.46-42.77-41.77 195.16-195.16H100v-59.99h646.23L551.69-705.54l41.77-41.77 266.92 266.93-266.92 266.92Z' />
	</svg>
);
