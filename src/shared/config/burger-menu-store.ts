import { create } from 'zustand';

interface MenuState {
	isOpen: boolean;
	currentMenu: 'main' | 'catalog' | 'search';
	toggleMenu: () => void;
	openMenu: (menu: 'main' | 'catalog' | 'search') => void;
	closeMenu: () => void;
	goToMainMenu: () => void;
}

export const useMenuStore = create<MenuState>(set => ({
	isOpen: false,
	currentMenu: 'main',
	toggleMenu: () => set(state => ({ isOpen: !state.isOpen })),
	openMenu: menu => set({ isOpen: true, currentMenu: menu }),
	closeMenu: () => set({ isOpen: false, currentMenu: 'main' }),
	goToMainMenu: () => set({ currentMenu: 'main' }),
}));
