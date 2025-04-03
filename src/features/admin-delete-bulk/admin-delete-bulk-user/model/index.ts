import { deleteBulkUserAdmin } from '@/entities/user';
import { toastWarningDelete } from '@/shared/lib/toast-warning-delete';

export function useAdminDeleteBulkUser(refetch?: () => void) {
	const { mutateAsync, isPending } = deleteBulkUserAdmin(refetch);

	const handleDeleteBulkUser = (ids: string[]) => {
		toastWarningDelete<string[]>({
			entity: 'пользователей',
			id: ids,

			onDelete: async ids => {
				await mutateAsync(ids);
			}, // Явно оборачиваем в `async` для соответствия `Promise<void>`
		});
	};

	return { handleDeleteBulkUser, isPending };
}
