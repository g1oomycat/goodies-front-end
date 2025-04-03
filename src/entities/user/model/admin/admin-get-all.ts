'use client';

import { useQuery } from '@tanstack/react-query';
import { adminUsersService } from '../../api';
import { IGetAllUsersResponse, IUsersParams } from '../../types';

export function getAdminUsers(params: IUsersParams) {
	// Запрос данных пользователя
	return useQuery<IGetAllUsersResponse>({
		queryKey: ['get-all-users', params],
		queryFn: () => adminUsersService.getUsers(params),
		staleTime: 30 * 1000, // 30 секунд
		gcTime: 30 * 1000, // 5 минут
	});
}
