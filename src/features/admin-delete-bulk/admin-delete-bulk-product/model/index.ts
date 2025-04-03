import { deleteBulkProductAdmin } from '@/entities/product';
import { toastWarningDelete } from '@/shared/lib/toast-warning-delete';

export function useAdminDeleteBulkProduct(refetch?: () => void) {
	const { mutateAsync, isPending } = deleteBulkProductAdmin(refetch);

	const handleDeleteBulkProduct = (ids: string[]) => {
		toastWarningDelete<string[]>({
			entity: 'Товары',
			id: ids,
			onDelete: async ids => {
				await mutateAsync(ids);
			}, // Явно оборачиваем в `async` для соответствия `Promise<void>`
		});
	};

	return { handleDeleteBulkProduct, isPending };
}
