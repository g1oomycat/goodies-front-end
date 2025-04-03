'use client';
import { getRouteAdminProducts } from '@/shared/constants/router';
import { handleAxiosError } from '@/shared/lib/handle-axios-error';
import { useMutation } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';
import { toast } from 'sonner';
import { adminProductsService } from '../../api';

export function deleteProductAdmin() {
	const router = useRouter();
	// Добавление в избранное
	return useMutation({
		mutationKey: ['delete-product'],
		mutationFn: (id: string) => adminProductsService.deleteProduct(id),
		onSuccess: () => {
			toast.success('товар удален');
			router.push(getRouteAdminProducts());
		},
		onError: error => {
			handleAxiosError(error, 'удалении товара');
		},
	});
}
