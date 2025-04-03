import { deleteBulkBannerAdmin } from '@/entities/banner';
import { toastWarningDelete } from '@/shared/lib/toast-warning-delete';

export function useAdminDeleteBulkBanner(refetch?: () => void) {
	const { mutateAsync, isPending } = deleteBulkBannerAdmin(refetch);

	const handleDeleteBulkBanner = (ids: string[]) => {
		toastWarningDelete<string[]>({
			entity: 'баннеров',
			id: ids,

			onDelete: async ids => {
				await mutateAsync(ids);
			}, // Явно оборачиваем в `async` для соответствия `Promise<void>`
		});
	};

	return { handleDeleteBulkBanner, isPending };
}
