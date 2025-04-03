import { deleteBulkCategoryAdmin } from '@/entities/category';
import { toastWarningDelete } from '@/shared/lib/toast-warning-delete';

export function useAdminDeleteBulkCategory(refetch?: () => void) {
	const { mutateAsync, isPending } = deleteBulkCategoryAdmin(refetch);

	const handleDeleteBulkCategory = (ids: string[]) => {
		toastWarningDelete<string[]>({
			entity: 'Категории',
			id: ids,

			onDelete: async ids => {
				await mutateAsync(ids);
			}, // Явно оборачиваем в `async` для соответствия `Promise<void>`
		});
	};

	return { handleDeleteBulkCategory, isPending };
}
