import { deleteProductAdmin } from '@/entities/product/model/admin/admin-delete';
import { toastWarningDelete } from '@/shared/lib/toast-warning-delete';

export function useAdminDeleteProduct() {
	const { mutateAsync, isPending } = deleteProductAdmin();

	const handleDeleteProduct = (id: string) => {
		toastWarningDelete<string>({
			entity: 'товара',
			id,
			onDelete: async id => {
				await mutateAsync(id);
			}, // Явно оборачиваем в `async` для соответствия `Promise<void>`
		});
	};

	return { handleDeleteProduct, isPending };
}
