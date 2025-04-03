export const handleOutsideClick = (
	event: React.MouseEvent<HTMLDivElement>,
	closeMenu: () => void
) => {
	if (event.target === event.currentTarget) {
		closeMenu();
	}
};
