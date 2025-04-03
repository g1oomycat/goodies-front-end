'use client';
import { getRouteAdminCategories } from '@/shared/constants/router';
import { handleAxiosError } from '@/shared/lib/handle-axios-error';
import { useMutation } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';
import { toast } from 'sonner';
import { adminCategoriesService } from '../../api';

export function deleteCategoryAdmin() {
	const router = useRouter();
	// Добавление в избранное
	return useMutation({
		mutationKey: ['delete-category'],
		mutationFn: (id: string) => adminCategoriesService.deleteCategory(id),
		onSuccess: () => {
			toast.success('Категория успешна удалена');
			router.push(getRouteAdminCategories()); // Перенаправляем только после удаления
		},
		onError: error => {
			handleAxiosError(error, 'Удалении категорий');
		},
	});
}
