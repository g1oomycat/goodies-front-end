import { useQuery } from '@tanstack/react-query';
import { adminPriceHistoryService } from '../api';
import { IPriceHistoryParams } from '../types/params';

export const getAllPriceHistory = (params: IPriceHistoryParams) => {
	return useQuery({
		queryKey: ['get-all-price-history', params],
		queryFn: () =>
			adminPriceHistoryService.getAll({
				...params,
			}),

		refetchOnWindowFocus: false,
		staleTime: 30 * 1000, // 30 секунд
		gcTime: 30 * 1000, // 5 минут
	});
};
