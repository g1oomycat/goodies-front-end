'use client';
import { getRouteAdminUsers } from '@/shared/constants/router';
import { handleAxiosError } from '@/shared/lib/handle-axios-error';

import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';
import { toast } from 'sonner';
import { adminUsersService } from '../../api';
import { IUsersUpdateByAdmin } from '../../types';

export function updateUserAdmin(id: string) {
	const queryClient = useQueryClient();
	// Добавление в избранное
	const router = useRouter();

	return useMutation({
		mutationKey: ['update-user', id],
		mutationFn: (data: IUsersUpdateByAdmin) =>
			adminUsersService.updateUser(id, data),
		onSuccess: () => {
			queryClient.invalidateQueries({
				queryKey: ['get-one-user-by-id', id],
			});

			toast.success(`пользователь обновлен`, {
				action: {
					label: 'К списку',
					onClick: () => router.push(getRouteAdminUsers()),
				},
				closeButton: true,
				duration: 6000,
			});
		},
		onError: error => {
			handleAxiosError(error, 'обновления пользователя');
		},
	});
}
