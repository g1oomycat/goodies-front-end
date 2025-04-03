'use client';
import { categoriesService, ICategoriesResponse } from '@/entities/category';
import { IProductsResponse, productsService } from '@/entities/product';
import useDebounce from '@/shared/hooks/useDebounce';
import { useQuery } from '@tanstack/react-query';
import { useEffect, useState } from 'react';

type Props = {
	limit?: number;
	onlyProducts?: boolean;
};

export function useSearchDebounce({ limit = 5, onlyProducts = false }: Props) {
	const [value, setValue] = useState('');
	const debouncedValue = useDebounce(value.trim(), 500);
	const [productsData, setProductsData] = useState<
		IProductsResponse[] | undefined
	>(undefined);
	const [allData, setAllData] = useState<
		(IProductsResponse[] | ICategoriesResponse[])[] | undefined
	>(undefined);

	// Запрос товаров
	const { data: productsSearchQuery, isFetching: isFetchingProducts } =
		useQuery({
			queryKey: ['products-search', debouncedValue],
			queryFn: () =>
				productsService.getProducts({ name: debouncedValue, limit }),
			enabled: !!debouncedValue && onlyProducts,
			select: data => data.result,
			staleTime: 5 * 1000,
			gcTime: 50 * 1000,
		});

	// Запрос товаров + категорий
	const { data: allSearchQuery, isFetching: isFetchingAll } = useQuery({
		queryKey: ['all-search', debouncedValue],
		queryFn: () =>
			Promise.all([
				productsService.getProducts({ name: debouncedValue, limit }),
				categoriesService.getCategories({ name: debouncedValue, limit }),
			]),
		enabled: !!debouncedValue && !onlyProducts,
		select: data => [data[0].result, data[1].result],
		staleTime: 5 * 1000,
		gcTime: 50 * 1000,
	});

	// Обнуляем данные, если value пустое
	useEffect(() => {
		if (!value) {
			setProductsData(undefined);
			setAllData(undefined);
		}
	}, [value]);

	// Устанавливаем данные, только когда запрос завершился
	useEffect(() => {
		if (!isFetchingProducts) {
			setProductsData(productsSearchQuery);
		}
		if (!isFetchingAll) {
			setAllData(allSearchQuery);
		}
	}, [productsSearchQuery, allSearchQuery, isFetchingProducts, isFetchingAll]);

	return {
		productsData,
		allData,
		value,
		setValue,
	};
}
