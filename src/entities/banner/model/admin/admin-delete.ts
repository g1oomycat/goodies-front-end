'use client';
import { getRouteAdminBanners } from '@/shared/constants/router';
import { handleAxiosError } from '@/shared/lib/handle-axios-error';
import { useMutation } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';
import { toast } from 'sonner';
import { adminBannerService } from '../../api';

export function deleteBannerAdmin() {
	const router = useRouter();
	// Добавление в избранное
	return useMutation({
		mutationKey: ['delete-banner'],
		mutationFn: (id: string) => adminBannerService.deleteBanner(id),
		onSuccess: () => {
			toast.success('баннер удален');
			router.push(getRouteAdminBanners()); // Перенаправляем только после удаления
		},
		onError: error => {
			handleAxiosError(error, 'удалении банера');
		},
	});
}
