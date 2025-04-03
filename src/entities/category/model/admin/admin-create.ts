'use client';
import { getRouteAdminCategories } from '@/shared/constants/router';
import { handleAxiosError } from '@/shared/lib/handle-axios-error';
import { useMutation } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';
import { toast } from 'sonner';
import { adminCategoriesService } from '../../api';
import { ICategoriesCreate } from '../../types';

export function createCategoryAdmin() {
	// Добавление в избранное
	const router = useRouter();
	return useMutation({
		mutationKey: ['create-category'],
		mutationFn: (data: ICategoriesCreate) =>
			adminCategoriesService.createCategory(data),
		onSuccess: () => {
			toast.success(`категория создана`, {
				action: {
					label: 'К списку',
					onClick: () => router.push(getRouteAdminCategories()),
				},
				closeButton: true,
				duration: 6000,
			});
		},

		onError: error => {
			handleAxiosError(error, 'Категории');
		},
	});
}
