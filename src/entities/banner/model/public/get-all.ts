import { useQuery } from '@tanstack/react-query';
import { bannerService } from '../../api';
import { IBannerParams } from '../../types';

export const getAllBanners = (params: IBannerParams, cache?: boolean) => {
	return useQuery({
		queryKey: ['get-all-banners', { ...params }],
		queryFn: () =>
			bannerService.getAll({
				...params,
			}),

		refetchOnWindowFocus: false,
		staleTime: 30 * 1000, // 30 секунд
		gcTime: 5 * 60 * 1000, // 5 минут
	});
};
