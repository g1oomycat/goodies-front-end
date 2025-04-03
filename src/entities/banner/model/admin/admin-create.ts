'use client';
import { getRouteAdminBanners } from '@/shared/constants/router';
import { handleAxiosError } from '@/shared/lib/handle-axios-error';

import { useMutation } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';
import { toast } from 'sonner';
import { adminBannerService } from '../../api';
import { IBannerCreate } from '../../types';

export function createBannerAdmin() {
	const router = useRouter();
	return useMutation({
		mutationKey: ['create-banner'],
		mutationFn: (data: IBannerCreate) => adminBannerService.createBanner(data),
		onSuccess: () => {
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
			handleAxiosError(error, 'создание баннера');
		},
	});
}
