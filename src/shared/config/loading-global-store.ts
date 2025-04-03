import { create } from 'zustand';

interface LoadingGlobalState {
	isLoading: boolean;
	setLoading: (isLoading: boolean) => void;
}

export const useLoadingGlobalStore = create<LoadingGlobalState>(set => ({
	isLoading: true,
	setLoading: isLoading => set({ isLoading }),
}));
