import { useMenuStore } from '@/shared/config/burger-menu-store';
import { MenuMobileIcon } from '../../icons/menu-mobile';
import { MenuWebIcon } from '../../icons/menu-web';
import { ButtonIcon } from '../button-icon';
type Props = {
	type?: 'mobile' | 'web';
};

export const MenuToggle = ({ type = 'web' }: Props) => {
	const { toggleMenu, openMenu, isOpen, currentMenu, closeMenu } =
		useMenuStore();
	function handleActionSearch() {
		if (isOpen) {
			if (currentMenu === 'search') {
				openMenu('main');
			} else {
				closeMenu();
			}
		} else {
			openMenu('main');
		}
	}
	return (
		<ButtonIcon
			onClick={handleActionSearch}
			colorType={isOpen && currentMenu !== 'search' ? 'active' : undefined}
		>
			{type === 'web' ? <MenuWebIcon /> : <MenuMobileIcon />}

			{/* <Hamburger
				size={size}
				direction='right'
				distance={distance}
				rounded
				animateOnMount
				toggled={isOpen}
				toggle={toggleMenu}
			/> */}
		</ButtonIcon>
	);
};
