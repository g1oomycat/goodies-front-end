import { deleteBulkReviewInstAdmin } from '@/entities/reviews-inst';
import { toastWarningDelete } from '@/shared/lib/toast-warning-delete';

export function useAdminDeleteBulkReviewInst(refetch?: () => void) {
	const { mutateAsync, isPending } = deleteBulkReviewInstAdmin(refetch);

	const handleDeleteBulkReviewInst = (ids: string[]) => {
		toastWarningDelete<string[]>({
			entity: 'Отзывы инсты',
			id: ids,

			onDelete: async ids => {
				await mutateAsync(ids);
			}, // Явно оборачиваем в `async` для соответствия `Promise<void>`
		});
	};

	return { handleDeleteBulkReviewInst, isPending };
}
