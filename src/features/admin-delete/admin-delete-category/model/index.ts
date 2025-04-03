import { deleteCategoryAdmin } from '@/entities/category';
import { toastWarningDelete } from '@/shared/lib/toast-warning-delete';

export function useAdminDeleteCategory() {
	const { mutateAsync, isPending } = deleteCategoryAdmin();

	const handleDeleteCategory = (id: string) => {
		toastWarningDelete<string>({
			entity: 'Категорию',
			id,
			onDelete: async id => {
				await mutateAsync(id);
			}, // Явно оборачиваем в `async` для соответствия `Promise<void>`
		});
	};

	return { handleDeleteCategory, isPending };
}
