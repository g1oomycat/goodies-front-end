'use client';
import { getRouteAdminCategories } from '@/shared/constants/router';
import { handleAxiosError } from '@/shared/lib/handle-axios-error';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';
import { toast } from 'sonner';
import { adminCategoriesService } from '../../api';

export function deleteCategoryAdmin() {
	const queryClient = useQueryClient();

	const router = useRouter();
	// Добавление в избранное
	return useMutation({
		mutationKey: ['delete-category'],
		mutationFn: (id: string) => adminCategoriesService.deleteCategory(id),
		onSuccess: () => {
			toast.success('Категория успешна удалена');
			queryClient.invalidateQueries({
				queryKey: ['get-all-categories'],
			});
			router.push(getRouteAdminCategories()); // Перенаправляем только после удаления
		},
		onError: error => {
			handleAxiosError(error, 'Удалении категорий');
		},
	});
}
