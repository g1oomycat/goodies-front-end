import {
	EnumProductSortOptionPublic,
	getInfinityAllProducts,
	IGetAllProductsResponse,
	sortMapProducts,
} from '@/entities/product';
import { getEnumValue } from '@/shared/lib/get-enum-value';
import { useSearchParams } from 'next/navigation';

export const useCategoryProducts = (
	categoryId: string,
	limit: number,
	initialProducts: IGetAllProductsResponse
) => {
	const searchParams = useSearchParams();

	const sort =
		getEnumValue(EnumProductSortOptionPublic, searchParams.get('sort')) ??
		EnumProductSortOptionPublic.POPULARITY;
	const { sortBy, sort: finalSort } = sortMapProducts[sort];

	const {
		data,
		fetchNextPage,
		hasNextPage,
		isFetchingNextPage,
		isError,
		refetch,
	} = getInfinityAllProducts(
		{
			categoryId,
			sortBy,
			sort: finalSort,
			limit,
		},
		initialProducts
	);

	const products = data?.pages.flatMap(page => page.result) || [];

	return {
		products,
		fetchNextPage,
		hasNextPage,
		isFetchingNextPage,
		isError,
		data,
		sort,
	};
};
