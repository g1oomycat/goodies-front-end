import { handleAxiosError } from '@/shared/lib/handle-axios-error';
import { useMutation } from '@tanstack/react-query';
import { toast } from 'sonner';
import { adminCategoriesService } from '../../api';

export function deleteBulkCategoryAdmin(refetch?: () => void) {
	// Добавление в избранное
	return useMutation({
		mutationKey: ['delete-bulk-category'],
		mutationFn: (data: string[]) => adminCategoriesService.deleteBulk(data),
		onSuccess: () => {
			toast.success('Категории успешно удалены');
			refetch?.();
		},
		onError: error => {
			handleAxiosError(error, 'удалении категорий');
		},
	});
}
