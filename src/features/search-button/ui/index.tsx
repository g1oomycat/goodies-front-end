'use client';

import { useMenuStore } from '@/shared/config/burger-menu-store';
import { ButtonIcon } from '@/shared/ui/components/button-icon';
import { SearchIcon } from '@/shared/ui/icons/search';

export const SearchButton = () => {
	const { closeMenu, currentMenu, isOpen, openMenu } = useMenuStore();
	function handleActionSearch() {
		if (isOpen) {
			if (currentMenu !== 'search') {
				openMenu('search');
			} else {
				closeMenu();
			}
		} else {
			openMenu('search');
		}
	}
	return (
		<ButtonIcon
			onClick={handleActionSearch}
			colorType={isOpen && currentMenu === 'search' ? 'active' : undefined}
		>
			<SearchIcon />
		</ButtonIcon>
	);
};
