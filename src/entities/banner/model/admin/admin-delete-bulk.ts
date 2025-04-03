import { handleAxiosError } from '@/shared/lib/handle-axios-error';
import { useMutation } from '@tanstack/react-query';
import { toast } from 'sonner';
import { adminBannerService } from '../../api';

export function deleteBulkBannerAdmin(refetch?: () => void) {
	// Добавление в избранное
	return useMutation({
		mutationKey: ['delete-bulk-banner'],
		mutationFn: (data: string[]) => adminBannerService.deleteBulk(data),
		onSuccess: () => {
			toast.success('баннеры удалены');
			refetch?.();
		},
		onError: error => {
			handleAxiosError(error, 'удалении баннеров');
		},
	});
}
