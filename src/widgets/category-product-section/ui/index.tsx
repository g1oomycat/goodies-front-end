'use client';

import { ICategoriesResponse } from '@/entities/category';
import {
	IGetAllProductsResponse,
	ProductCard,
	sortOptionsProductsPublic,
} from '@/entities/product';
import { AddProductToBasketBtnIcon } from '@/features/add-product-to-basket';
import { AddProductToWishlistIcon } from '@/features/add-product-to-wishlist';
import { InfinityScroll } from '@/features/infinity-scroll';
import { GridContainer } from '@/shared/components/grid-container';

import { getRouteMain } from '@/shared/constants/router';
import { useQuery } from '@/shared/hooks/useQuery';
import { Breadcrumbs } from '@/shared/kit/breadcrumbs';
import { TotalAndSortBlock } from '@/shared/kit/total-and-sort-block';
import { productPluralize } from '@/shared/lib/pluralize';
import classNames from 'classnames';
import { useCategoryProducts } from '../model';
import styles from './styles.module.scss';

type Props = {
	category: ICategoriesResponse;
	limit: number;
	initialProducts: IGetAllProductsResponse;
};

export const CategoryProductSection = ({
	category,
	limit,
	initialProducts,
}: Props) => {
	const itemsBreadcrumbs = [
		{
			title: 'главная',
			href: getRouteMain(),
		},

		{ title: category.name },
	];
	const {
		products,
		fetchNextPage,
		hasNextPage,
		isFetchingNextPage,
		isError,
		data,

		sort,
	} = useCategoryProducts(category.id, limit, initialProducts);
	const { createQuery } = useQuery();
	return (
		<div className={classNames(styles.root, '_cont_limit')}>
			<div className='mt-20 mb-20'>
				<Breadcrumbs items={itemsBreadcrumbs} className='fs-s-1 low' />
			</div>
			<div
				className={classNames(styles.title, 'mb-45 mt-30')}
				style={{ textAlign: 'center' }}
			>
				<h1 className='mb-80 fs-xxl-2'>{category.name}</h1>
				<div
					className='pt-25'
					style={{ borderTop: '1px solid var(--color-main-glass)' }}
				>
					<TotalAndSortBlock
						lenProducts={initialProducts.totalCount}
						sortList={sortOptionsProductsPublic}
						pluralizeFunction={productPluralize}
						createQueryString={createQuery}
						sort={sort}
					/>
				</div>
			</div>

			<section className={classNames(styles.body, 'mb-100')}>
				<InfinityScroll
					finishButton={true}
					hasNextPage={!!hasNextPage}
					isLoading={isFetchingNextPage}
					fetchNextPage={fetchNextPage}
					page={data?.pageParams.length}
					isError={isError}
					className='mt-40'
				>
					<GridContainer>
						{products.map((product, index) => (
							<ProductCard
								data={product}
								key={index}
								actionAddWishlist={
									<AddProductToWishlistIcon productId={product.id} />
								}
								actionAddBasket={
									<AddProductToBasketBtnIcon productId={product.id} />
								}
							/>
						))}
					</GridContainer>
				</InfinityScroll>
			</section>
		</div>
	);
};
