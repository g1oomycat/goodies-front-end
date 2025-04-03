import { ICartResponse } from '@/entities/cart';
import { create } from 'zustand';

interface CartState {
	cart?: ICartResponse;
	isLoading: boolean;
	setLoading: (isLoading: boolean) => void;
	setCart: (cart?: ICartResponse) => void;
}

export const useCartStore = create<CartState>(set => ({
	cart: undefined,
	isLoading: true,
	setLoading: isLoading => set({ isLoading }),
	setCart: cart => set({ cart }),
}));
