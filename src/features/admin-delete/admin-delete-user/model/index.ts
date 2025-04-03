import { deleteUserAdmin } from '@/entities/user';
import { toastWarningDelete } from '@/shared/lib/toast-warning-delete';

export function useAdminDeleteUser() {
	const { mutateAsync, isPending } = deleteUserAdmin();

	const handleDeleteUser = (id: string) => {
		toastWarningDelete<string>({
			entity: 'Пользователя',
			id,
			onDelete: async id => {
				await mutateAsync(id);
			}, // Явно оборачиваем в `async` для соответствия `Promise<void>`
		});
	};

	return { handleDeleteUser, isPending };
}
