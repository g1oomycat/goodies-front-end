import { useQuery } from '@tanstack/react-query';
import { ordersService } from '../../api';

export const getOneOrdersSelf = (publicId: string) => {
	return useQuery({
		queryKey: ['get-one-order-self', publicId],
		queryFn: () => ordersService.getOrderByPublicId(publicId),
		refetchOnWindowFocus: false,
		staleTime: 1000 * 60 * 60,
	});
};
