import { create } from 'zustand';

interface CartSideBarState {
	isOpen: boolean;
	toggleSideBar: () => void;
	openSideBar: () => void;
	closeSideBar: () => void;
}

export const useCartSideBarStore = create<CartSideBarState>(set => ({
	isOpen: false,
	toggleSideBar: () => set(state => ({ isOpen: !state.isOpen })),
	openSideBar: () => set({ isOpen: true }),
	closeSideBar: () => set({ isOpen: false }),
}));
