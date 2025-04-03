'use client';
import { adminProductsService, IProductsUpdate } from '@/entities/product';
import { getRouteAdminProducts } from '@/shared/constants/router';
import { handleAxiosError } from '@/shared/lib/handle-axios-error';

import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';

import { toast } from 'sonner';

export function updateProductAdmin(id: string) {
	const router = useRouter();
	const queryClient = useQueryClient();
	// Добавление в избранное
	return useMutation({
		mutationKey: ['update-product', id],
		mutationFn: (data: IProductsUpdate) =>
			adminProductsService.updateProduct(id, data),
		onSuccess: () => {
			queryClient.invalidateQueries({
				queryKey: ['get-one-product-by-id', id],
			});

			toast.success(`товар обновлен`, {
				action: {
					label: 'К списку',
					onClick: () => router.push(getRouteAdminProducts()),
				},
				closeButton: true,
				duration: 6000,
			});
		},
		onError: error => {
			handleAxiosError(error, 'обновление товара');
		},
	});
}
