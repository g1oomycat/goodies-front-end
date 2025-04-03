import { handleAxiosError } from '@/shared/lib/handle-axios-error';
import { useMutation } from '@tanstack/react-query';
import { toast } from 'sonner';
import { adminReviewsInstService } from '../../api';

export function deleteBulkReviewInstAdmin(refetch?: () => void) {
	// Добавление в избранное
	return useMutation({
		mutationKey: ['delete-bulk-review-inst'],
		mutationFn: (data: string[]) => adminReviewsInstService.deleteBulk(data),
		onSuccess: () => {
			toast.success('отзывы инсты удалены');
			refetch?.();
		},
		onError: error => {
			handleAxiosError(error, 'удалении отзывов инсты');
		},
	});
}
