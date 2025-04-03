type Props = {
	height?: number;
	className?: string;
};

const DEFAULT_HEIGHT = 20;

export const FilterOffIcon = ({ height = DEFAULT_HEIGHT }: Props) => (
	<svg
		xmlns='http://www.w3.org/2000/svg'
		height={height}
		viewBox='0 -960 960 960'
		fill='currentColor'
	>
		<path d='M791-55 55-791l57-57 736 736-57 57ZM633-440l-80-80h167v80h-87ZM433-640l-80-80h487v80H433Zm-33 400v-80h160v80H400ZM240-440v-80h166v80H240ZM120-640v-80h86v80h-86Z' />
	</svg>
);
