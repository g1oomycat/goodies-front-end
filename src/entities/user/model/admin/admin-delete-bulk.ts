import { handleAxiosError } from '@/shared/lib/handle-axios-error';
import { useMutation } from '@tanstack/react-query';
import { toast } from 'sonner';
import { adminUsersService } from '../../api';

export function deleteBulkUserAdmin(refetch?: () => void) {
	// Добавление в избранное
	return useMutation({
		mutationKey: ['delete-bulk-user'],
		mutationFn: (data: string[]) => adminUsersService.deleteBulk(data),
		onSuccess: () => {
			toast.success('пользователи успешно удалены');
			refetch?.();
		},
		onError: error => {
			handleAxiosError(error, 'удалении пользователей');
		},
	});
}
