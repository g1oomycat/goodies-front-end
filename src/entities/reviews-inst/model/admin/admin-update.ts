'use router';
import { getRouteAdminReviewsInstagram } from '@/shared/constants/router';
import { handleAxiosError } from '@/shared/lib/handle-axios-error';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';
import { toast } from 'sonner';
import { adminReviewsInstService } from '../../api';
import { IReviewsInstUpdate } from '../../types';

export function updateReviewInstAdmin(id: string) {
	const queryClient = useQueryClient();
	// Добавление в избранное
	const router = useRouter();

	return useMutation({
		mutationKey: ['update-review-inst', id],
		mutationFn: (data: IReviewsInstUpdate) =>
			adminReviewsInstService.updateReviewsInst(id, data),
		onSuccess: () => {
			queryClient.invalidateQueries({
				queryKey: ['get-one-review-inst-by-id', id],
			});

			toast.success(`отзыв инсты обновлен`, {
				action: {
					label: 'К списку',
					onClick: () => router.push(getRouteAdminReviewsInstagram()),
				},
				closeButton: true,
				duration: 6000,
			});
		},
		onError: error => {
			handleAxiosError(error, 'обновление отзыва инсты');
		},
	});
}
