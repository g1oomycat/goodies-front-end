'use client';
import { adminUsersService } from '@/entities/user';
import { getRouteAdminUsers } from '@/shared/constants/router';
import { handleAxiosError } from '@/shared/lib/handle-axios-error';
import { useMutation } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';
import { toast } from 'sonner';

export function deleteUserAdmin() {
	const router = useRouter();
	// Добавление в избранное
	return useMutation({
		mutationKey: ['delete-user'],
		mutationFn: (id: string) => adminUsersService.deleteUser(id),
		onSuccess: () => {
			toast.success('пользователь успешно удален');
			router.push(getRouteAdminUsers()); // Перенаправляем только после удаления
		},
		onError: error => {
			handleAxiosError(error, 'далении пользователя');
		},
	});
}
