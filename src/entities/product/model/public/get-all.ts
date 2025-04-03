'use client';
import { useQuery } from '@tanstack/react-query';
import { productsService } from '../../api';
import { IProductsParams } from '../../types';

export const getAllProducts = (params: IProductsParams, cache?: boolean) => {
	return useQuery({
		queryKey: ['get-all-products', params],
		queryFn: () =>
			productsService.getProducts({
				...params,
			}),
		staleTime: 30 * 1000, // 30 секунд
		gcTime: 30 * 1000, // 5 минут
	});
};
