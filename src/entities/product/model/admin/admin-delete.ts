'use client';
import { getRouteAdminProducts } from '@/shared/constants/router';
import { handleAxiosError } from '@/shared/lib/handle-axios-error';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';
import { toast } from 'sonner';
import { adminProductsService } from '../../api';

export function deleteProductAdmin() {
	const queryClient = useQueryClient();

	const router = useRouter();
	// Добавление в избранное
	return useMutation({
		mutationKey: ['delete-product'],
		mutationFn: (id: string) => adminProductsService.deleteProduct(id),
		onSuccess: () => {
			toast.success('товар удален');
			queryClient.invalidateQueries({
				queryKey: ['get-all-products'],
			});
			router.push(getRouteAdminProducts());
		},
		onError: error => {
			handleAxiosError(error, 'удалении товара');
		},
	});
}
