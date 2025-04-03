type Props = {
	size?: number;
};

export const CloseIcon = ({ size }: Props) => (
	<svg
		xmlns='http://www.w3.org/2000/svg'
		width={size ? size : '1em'}
		height={size ? size : '1em'}
		viewBox='0 -960 960 960'
		fill='currentColor'
	>
		<path d='M256-213.85 213.85-256l224-224-224-224L256-746.15l224 224 224-224L746.15-704l-224 224 224 224L704-213.85l-224-224-224 224Z' />
	</svg>
);
