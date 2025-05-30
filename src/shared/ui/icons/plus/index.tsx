type Props = {
	size?: number;
	className?: string;
};

export const PlusIcon = ({ size }: Props) => (
	<svg
		xmlns='http://www.w3.org/2000/svg'
		viewBox='0 -960 960 960'
		width={size ? size : '1em'}
		height={size ? size : '1em'}
		fill='currentColor'
	>
		<path d='M434.5-434.5H191.87v-91H434.5v-242.63h91v242.63h242.63v91H525.5v242.63h-91V-434.5Z' />
	</svg>
);
