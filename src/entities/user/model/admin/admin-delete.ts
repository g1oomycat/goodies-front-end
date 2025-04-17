'use client';
import { adminUsersService } from '@/entities/user';
import { getRouteAdminUsers } from '@/shared/constants/router';
import { handleAxiosError } from '@/shared/lib/handle-axios-error';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';
import { toast } from 'sonner';

export function deleteUserAdmin() {
	const router = useRouter();
	const queryClient = useQueryClient();

	// Добавление в избранное
	return useMutation({
		mutationKey: ['delete-user'],
		mutationFn: (id: string) => adminUsersService.deleteUser(id),
		onSuccess: () => {
			toast.success('пользователь успешно удален');
			queryClient.invalidateQueries({
				queryKey: ['get-all-users'],
			});
			router.push(getRouteAdminUsers()); // Перенаправляем только после удаления
		},
		onError: error => {
			handleAxiosError(error, 'далении пользователя');
		},
	});
}
