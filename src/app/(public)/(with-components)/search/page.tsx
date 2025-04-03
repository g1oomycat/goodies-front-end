'use client';

import {
	EnumProductSortOptionPublic,
	getInfinityAllProducts,
	sortMapProducts,
} from '@/entities/product';
import LoadingGlobal from '@/shared/components/loading-global';
import { useLoadingGlobalStore } from '@/shared/config/loading-global-store';
import { getEnumValue } from '@/shared/lib/get-enum-value';
import { SearchProductSection } from '@/widgets/search-product-section/ui';
import { UpSaleBlockClientFetch } from '@/widgets/up-sale-block';
import { useSearchParams } from 'next/navigation';
import { useEffect } from 'react';

const LIMIT_PRODUCTS = 36;

export default function Page() {
	const { setLoading } = useLoadingGlobalStore();
	const params = useSearchParams();
	const name = params.get('q') ?? '';
	const sort =
		getEnumValue(EnumProductSortOptionPublic, params.get('sort')) ??
		EnumProductSortOptionPublic.POPULARITY;
	const { sortBy, sort: finalSort } = sortMapProducts[sort];

	const {
		data,
		fetchNextPage,
		hasNextPage,
		isFetchingNextPage,
		isError,

		isLoading,
		isFetching,
	} = getInfinityAllProducts({
		sortBy,
		sort: finalSort,
		limit: LIMIT_PRODUCTS,
		name,
	});

	useEffect(() => {
		if (!isLoading && data) setLoading(false);
	}, [data, isLoading]);

	const products = data?.pages.flatMap(page => page.result) || [];
	return (
		<>
			<SearchProductSection
				hasNextPage={hasNextPage}
				isError={isError}
				isFetchingNextPage={isFetchingNextPage}
				products={products}
				sort={sort}
				name={name}
				fetchNextPage={fetchNextPage}
				total={data?.pages[0].totalCount}
				page={data?.pageParams.length}
				isFetching={isFetching}
			/>
			{!products.length && (
				<>
					<UpSaleBlockClientFetch sort='popularity' />
					<UpSaleBlockClientFetch sort='discountAmount' />
				</>
			)}
			<LoadingGlobal />
		</>
	);
}
