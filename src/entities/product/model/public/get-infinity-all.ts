import { useInfiniteQuery } from '@tanstack/react-query';
import { productsService } from '../../api';
import { IGetAllProductsResponse, IProductsParams } from '../../types';

export const getInfinityAllProducts = (
	params: IProductsParams,
	initialProducts?: IGetAllProductsResponse
) => {
	return useInfiniteQuery({
		queryKey: ['catalog-products', params],
		queryFn: ({ pageParam }) =>
			pageParam === 1 && initialProducts
				? Promise.resolve(initialProducts)
				: productsService.getProducts({ ...params, page: pageParam }), // Проверяем, если это первая страница, пропускаем запрос
		getNextPageParam: (lastPage, _, lastPageParam) =>
			lastPage.result.length === params.limit ? lastPageParam + 1 : undefined,
		initialPageParam: 1,
		...(initialProducts
			? {
					initialData: {
						pageParams: [1],
						pages: [initialProducts],
					},
			  }
			: {}),
	});
};
