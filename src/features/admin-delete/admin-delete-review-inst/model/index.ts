import { deleteReviewInstAdmin } from '@/entities/reviews-inst';
import { toastWarningDelete } from '@/shared/lib/toast-warning-delete';

export function useAdminDeleteReviewInst() {
	const { mutateAsync, isPending } = deleteReviewInstAdmin();

	const handleDeleteReviewInst = (id: string) => {
		toastWarningDelete<string>({
			entity: 'Отзывы инсты',
			id,

			onDelete: async id => {
				await mutateAsync(id);
			}, // Явно оборачиваем в `async` для соответствия `Promise<void>`
		});
	};

	return { handleDeleteReviewInst, isPending };
}
