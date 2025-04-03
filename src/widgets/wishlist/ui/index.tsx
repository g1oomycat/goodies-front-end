'use client';

import { ProductCard } from '@/entities/product';
import { AddProductToBasketBtnIcon } from '@/features/add-product-to-basket';
import { AddProductToWishlistIcon } from '@/features/add-product-to-wishlist';
import { productPluralize } from '@/shared/lib/pluralize';
import styles from './styles.module.scss';

import {
	IGetAllFavoritesResponse,
	sortOptionsFavorites,
} from '@/entities/favorites';

import { LoadingBlock } from '@/shared/components/loading-block';
import { useQuery } from '@/shared/hooks/useQuery';
import { PaginationANTD } from '@/shared/kit/pagination';
import { TotalAndSortBlock } from '@/shared/kit/total-and-sort-block';

type Props = {
	data: IGetAllFavoritesResponse;
	sort: string;
	isFetching: boolean;
};

export const Wishlist = ({ data, sort, isFetching }: Props) => {
	const { createQuery } = useQuery();
	return (
		<>
			<div
				className='mb-45 pt-25'
				style={{ borderTop: '1px solid var(--color-main-glass)' }}
			>
				<TotalAndSortBlock
					lenProducts={data.totalCount}
					sortList={sortOptionsFavorites}
					pluralizeFunction={productPluralize}
					createQueryString={createQuery}
					sort={sort}
				/>
			</div>

			<div style={{ position: 'relative' }}>
				<LoadingBlock isLoading={isFetching} />
				<div className={styles.grid_block}>
					{data.result.map((product, index) => (
						<ProductCard
							data={product.product}
							key={index}
							actionAddWishlist={
								<AddProductToWishlistIcon productId={product.product.id} />
							}
							actionAddBasket={
								<AddProductToBasketBtnIcon productId={product.product.id} />
							}
						/>
					))}
				</div>
				<PaginationANTD
					createQueryString={createQuery}
					totalCount={data.totalCount}
					limit={data.limit}
					page={data.page}
				/>
			</div>
		</>
	);
};
