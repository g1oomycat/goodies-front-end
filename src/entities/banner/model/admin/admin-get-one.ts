import { adminBannerService } from '@/entities/banner';
import { useQuery } from '@tanstack/react-query';

export const getOneBannerAdmin = (id: string) => {
	return useQuery({
		queryKey: ['get-one-banner-by-id', { id }],
		queryFn: () => adminBannerService.getBanner(id),
	});
};
