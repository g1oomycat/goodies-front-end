'use client';

import { IGetAllCategoriesResponse } from '@/entities/category';
import { useMenuStore } from '@/shared/config/burger-menu-store';
import { SideBar } from '@/shared/kit/side-bar';
import { CatalogMenu } from './components/catalog-menu';
import { MainMenu } from './components/main-menu';
import { SearchMenu } from './components/search-menu';
type Props = {
	data: IGetAllCategoriesResponse;
};

export const BurgerMenuContent = ({ data }: Props) => {
	const { isOpen, closeMenu, currentMenu, goToMainMenu, openMenu } =
		useMenuStore();

	// Контент каталога

	return (
		<SideBar
			closeMenu={closeMenu}
			isOpen={isOpen}
			menuSize={currentMenu === 'search' ? 'middle' : 'small'}
			keyAnimate={currentMenu}
			side='left'
			withHeader={true}
		>
			{currentMenu === 'main' && <MainMenu openMenu={openMenu} />}
			{currentMenu === 'catalog' && (
				<CatalogMenu goToMainMenu={goToMainMenu} data={data.result} />
			)}
			{currentMenu === 'search' && <SearchMenu closeMenu={closeMenu} />}
		</SideBar>
	);
};
