import { useQuery } from '@tanstack/react-query';
import { adminOrdersService } from '../../api';

export const getOneOrderAdmin = (id: string) => {
	return useQuery({
		queryKey: ['get-one-order-by-id', id],
		queryFn: () => adminOrdersService.getOne(id),
	});
};
