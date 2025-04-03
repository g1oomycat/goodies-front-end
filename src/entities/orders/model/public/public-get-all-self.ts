import { useQuery } from '@tanstack/react-query';
import { ordersService } from '../../api';
import { IOrderParams } from '../../types';

export const getAllOrdersSelf = (params: IOrderParams) => {
	return useQuery({
		queryKey: ['get-all-orders-self', { ...params }],
		queryFn: () =>
			ordersService.getOrders({
				...params,
			}),
		refetchOnWindowFocus: false,
		staleTime: 1000 * 60 * 60,
	});
};
