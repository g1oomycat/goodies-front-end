import { EnumUserRole, IUsersResponse } from '@/entities/user';
import { create } from 'zustand';

interface AuthState {
	isAuthenticated: boolean;
	role: EnumUserRole;
	data?: IUsersResponse;
	isLoading: boolean;
	setAuthenticated: (isAuthenticated: boolean) => void;
	setRole: (role: EnumUserRole) => void;
	setLoading: (isLoading: boolean) => void;
	setData: (data?: IUsersResponse) => void;
}

export const useAuthStore = create<AuthState>(set => ({
	isAuthenticated: false,
	role: EnumUserRole.USER,
	data: undefined,
	isLoading: true,

	setAuthenticated: isAuthenticated => set({ isAuthenticated }),
	setRole: role => set({ role }),
	setLoading: isLoading => set({ isLoading }),
	setData: data => set({ data }),
}));
