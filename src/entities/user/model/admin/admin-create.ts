'use client';
import { getRouteAdminUsers } from '@/shared/constants/router';
import { handleAxiosError } from '@/shared/lib/handle-axios-error';
import { useMutation } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';
import { toast } from 'sonner';
import { adminUsersService } from '../../api';
import { IUsersCreateByAdmin } from '../../types/api';

export function createUserAdmin() {
	// Добавление в избранное
	const router = useRouter();
	return useMutation({
		mutationKey: ['create-user'],
		mutationFn: (data: IUsersCreateByAdmin) =>
			adminUsersService.createUser(data),
		onSuccess: () => {
			toast.success(`пользователь создан`, {
				action: {
					label: 'К списку',
					onClick: () => router.push(getRouteAdminUsers()),
				},
				closeButton: true,
				duration: 6000,
			});
		},

		onError: error => {
			handleAxiosError(error, 'пользователя');
		},
	});
}
