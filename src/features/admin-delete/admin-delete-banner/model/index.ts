import { deleteBannerAdmin } from '@/entities/banner';
import { toastWarningDelete } from '@/shared/lib/toast-warning-delete';

export function useAdminDeleteBanner() {
	const { mutateAsync, isPending } = deleteBannerAdmin();

	const handleDeleteBanner = (id: string) => {
		toastWarningDelete<string>({
			entity: 'Категорию',
			id,
			onDelete: async id => {
				await mutateAsync(id);
			}, // Явно оборачиваем в `async` для соответствия `Promise<void>`
		});
	};

	return { handleDeleteBanner, isPending };
}
