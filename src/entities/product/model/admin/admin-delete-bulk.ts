import { handleAxiosError } from '@/shared/lib/handle-axios-error';
import { useMutation } from '@tanstack/react-query';
import { toast } from 'sonner';
import { adminProductsService } from '../../api';

export function deleteBulkProductAdmin(refetch?: () => void) {
	// Добавление в избранное
	return useMutation({
		mutationKey: ['delete-bulk-product'],
		mutationFn: (data: string[]) => adminProductsService.deleteBulk(data),
		onSuccess: () => {
			toast.success('товары удалены');
			refetch?.();
		},
		onError: error => {
			handleAxiosError(error, 'удалении товаров');
		},
	});
}
