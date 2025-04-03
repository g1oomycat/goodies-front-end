'use client';

import { getRouteAdminCategories } from '@/shared/constants/router';
import { handleAxiosError } from '@/shared/lib/handle-axios-error';

import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';
import { toast } from 'sonner';
import { adminCategoriesService } from '../../api';
import { ICategoriesUpdate } from '../../types';

export function updateCategoryAdmin(id: string) {
	const queryClient = useQueryClient();
	// Добавление в избранное
	const router = useRouter();

	return useMutation({
		mutationKey: ['update-category', id],
		mutationFn: (data: ICategoriesUpdate) =>
			adminCategoriesService.updateCategory(id, data),
		onSuccess: () => {
			queryClient.invalidateQueries({
				queryKey: ['get-one-category-by-id', id],
			});

			toast.success(`категория обновлена`, {
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
