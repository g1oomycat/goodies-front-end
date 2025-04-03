'use client';
import { getRouteAdminBanners } from '@/shared/constants/router';
import { handleAxiosError } from '@/shared/lib/handle-axios-error';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';
import { toast } from 'sonner';
import { adminBannerService } from '../../api';
import { IBannerUpdate } from '../../types';

export function updateBannerAdmin(id: string) {
	const queryClient = useQueryClient();
	// Добавление в избранное
	const router = useRouter();
	return useMutation({
		mutationKey: ['update-banner', id],
		mutationFn: (data: IBannerUpdate) =>
			adminBannerService.updateBanner(id, data),
		onSuccess: () => {
			queryClient.invalidateQueries({
				queryKey: ['get-one-banner-by-id', id],
			});

			toast.success(`баннер обновлен`, {
				action: {
					label: 'К списку',
					onClick: () => router.push(getRouteAdminBanners()),
				},
				closeButton: true,
				duration: 6000,
			});
		},
		onError: error => {
			handleAxiosError(error, 'обновление баннера');
		},
	});
}
