import { create } from 'zustand';

interface AuthSideBarState {
	isOpen: boolean;
	currentAuth: 'auth' | 'registration';
	toggleSideBar: () => void;
	openSideBar: (auth: 'auth' | 'registration') => void;
	closeSideBar: () => void;
}

export const useAuthSideBarStore = create<AuthSideBarState>(set => ({
	isOpen: false,
	currentAuth: 'auth',
	toggleSideBar: () => set(state => ({ isOpen: !state.isOpen })),
	openSideBar: auth => set({ isOpen: true, currentAuth: auth }),
	closeSideBar: () => set({ isOpen: false, currentAuth: 'auth' }),
}));
