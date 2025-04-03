import { useQuery } from '@tanstack/react-query';
import { adminProductsService } from '../../api';

export const getAdminOneProduct = (id: string) => {
	return useQuery({
		queryKey: ['get-one-product-by-id', id],
		queryFn: () => adminProductsService.getProduct(id),

		refetchOnWindowFocus: false,
	});
};
