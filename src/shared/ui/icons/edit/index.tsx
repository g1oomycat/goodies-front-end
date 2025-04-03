type Props = {
	height?: number;
	className?: string;
};

const DEFAULT_HEIGHT = 20;

export const EditIcon = ({ height = DEFAULT_HEIGHT }: Props) => (
	<svg
		xmlns='http://www.w3.org/2000/svg'
		height={height}
		viewBox='0 -960 960 960'
		fill='currentColor'
	>
		<path d='M200-200h43.92l427.93-427.92-43.93-43.93L200-243.92V-200Zm-40 40v-100.77l527.23-527.77q6.15-5.48 13.57-8.47 7.43-2.99 15.49-2.99t15.62 2.54q7.55 2.54 13.94 9.15l42.69 42.93q6.61 6.38 9.04 14 2.42 7.63 2.42 15.25 0 8.13-2.74 15.56-2.74 7.42-8.72 13.57L260.77-160H160Zm600.77-556.31-44.46-44.46 44.46 44.46ZM649.5-649.5l-21.58-22.35 43.93 43.93-22.35-21.58Z' />
	</svg>
);
