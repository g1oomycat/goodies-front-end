'use router';
import { getRouteAdminReviewsInstagram } from '@/shared/constants/router';
import { handleAxiosError } from '@/shared/lib/handle-axios-error';
import { useMutation } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';
import { toast } from 'sonner';
import { adminReviewsInstService } from '../../api';
import { IReviewsInstCreate } from '../../types';

export function createReviewInstAdmin() {
	// Добавление в избранное
	const router = useRouter();
	return useMutation({
		mutationKey: ['create-review-inst'],
		mutationFn: (data: IReviewsInstCreate) =>
			adminReviewsInstService.createReviewsInst(data),
		onSuccess: () => {
			toast.success(`отзыв инсты создан`, {
				action: {
					label: 'К списку',
					onClick: () => router.push(getRouteAdminReviewsInstagram()),
				},
				closeButton: true,
				duration: 6000,
			});
		},

		onError: error => {
			handleAxiosError(error, 'отзыва инсты');
		},
	});
}
