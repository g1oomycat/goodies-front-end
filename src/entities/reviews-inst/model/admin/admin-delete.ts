'use router';
import { getRouteAdminReviewsInstagram } from '@/shared/constants/router';
import { handleAxiosError } from '@/shared/lib/handle-axios-error';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';
import { toast } from 'sonner';
import { adminReviewsInstService } from '../../api';

export function deleteReviewInstAdmin() {
	const router = useRouter();
	const queryClient = useQueryClient();

	// Добавление в избранное
	return useMutation({
		mutationKey: ['delete-review-inst'],
		mutationFn: (id: string) => adminReviewsInstService.deleteReviewsInst(id),
		onSuccess: () => {
			toast.success('отзыв инсты удален');
			queryClient.invalidateQueries({
				queryKey: ['get-all-reviews-inst'],
			});
			router.push(getRouteAdminReviewsInstagram()); // Перенаправляем только после удаления
		},
		onError: error => {
			handleAxiosError(error, 'удалении отзыва инсты');
		},
	});
}
