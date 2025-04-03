type Props = {
	size?: number;
	className?: string;
};

export const MinusIcon = ({ size }: Props) => (
	<svg
		xmlns='http://www.w3.org/2000/svg'
		viewBox='0 -960 960 960'
		width={size ? size : '1em'}
		height={size ? size : '1em'}
		fill='currentColor'
	>
		<path d='M191.87-434.5v-91h576.26v91H191.87Z' />
	</svg>
);
