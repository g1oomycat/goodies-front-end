'use client';
import { EnumFavoriteSortOption, sortMapFavorites } from '@/entities/favorites';
import { getAllFavorites } from '@/entities/favorites/model/get-all';
import { useLoadingGlobalStore } from '@/shared/config/loading-global-store';
import { getEnumValue } from '@/shared/lib/get-enum-value';
import { LikeIcon } from '@/shared/ui/icons/like';
import { Wishlist } from '@/widgets/wishlist';

import { useSearchParams } from 'next/navigation';
import { useEffect } from 'react';
// const LIMIT = 6;
const LIMIT = 24;
export default function Page() {
	const { setLoading } = useLoadingGlobalStore();
	const searchParams = useSearchParams();

	const page = Math.max(Number(searchParams.get('page')), 1);

	const sort =
		getEnumValue(EnumFavoriteSortOption, searchParams.get('sort')) ??
		EnumFavoriteSortOption.DATE_OF_ADDING;
	const { sortBy, sort: finalSort } = sortMapFavorites[sort];

	const { data, isError, isLoading, isFetching } = getAllFavorites({
		limit: LIMIT,
		page,
		sortBy,
		sort: finalSort,
	});
	useEffect(() => {
		if (!isLoading && data) setLoading(false);
	}, [data, isLoading]);

	if (!data) return <></>;
	if (!data.totalResult)
		return (
			<p>
				Нажмите на
				<span>
					<LikeIcon />
				</span>
				, чтобы добавить продукт в избранное.
			</p>
		);

	return <Wishlist data={data} sort={sort} isFetching={isFetching} />;
}
