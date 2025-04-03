import { useQuery } from '@tanstack/react-query';
import { adminOrdersService } from '../../api/admin';
import { IOrderParams } from '../../types';

export const getAllOrdersAdmin = (params: IOrderParams) => {
	return useQuery({
		queryKey: ['get-all-orders', { ...params }],
		queryFn: () =>
			adminOrdersService.getAll({
				...params,
			}),
		refetchOnWindowFocus: false,
		staleTime: 30 * 1000, // 30 секунд
		gcTime: 5 * 60 * 1000, // 5 минут
	});
};
