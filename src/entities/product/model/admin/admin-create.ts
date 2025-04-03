'use client';
import { adminProductsService, IProductsCreate } from '@/entities/product';
import { getRouteAdminProducts } from '@/shared/constants/router';
import { handleAxiosError } from '@/shared/lib/handle-axios-error';

import { useMutation } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';
import { toast } from 'sonner';

export function createProductAdmin() {
	// Добавление в избранное
	const router = useRouter();

	return useMutation({
		mutationKey: ['create-product'],
		mutationFn: (data: IProductsCreate) =>
			adminProductsService.createProduct(data),
		onSuccess: () => {
			toast.success(`товар создан`, {
				action: {
					label: 'К списку',
					onClick: () => router.push(getRouteAdminProducts()),
				},
				closeButton: true,
				duration: 6000,
			});
		},
		onError: error => {
			handleAxiosError(error, 'создании товара');
		},
	});
}
