'use client';

import {
	EnumProductSortOptionPublic,
	IProductsResponse,
	ProductCard,
	sortOptionsProductsPublic,
} from '@/entities/product';
import { AddProductToBasketBtnIcon } from '@/features/add-product-to-basket';
import { AddProductToWishlistIcon } from '@/features/add-product-to-wishlist';
import { InfinityScroll } from '@/features/infinity-scroll';
import { GridContainer } from '@/shared/components/grid-container';

import { LoadingBlock } from '@/shared/components/loading-block';
import { useMenuStore } from '@/shared/config/burger-menu-store';
import { useQuery } from '@/shared/hooks/useQuery';
import { TotalAndSortBlock } from '@/shared/kit/total-and-sort-block';
import { productPluralize } from '@/shared/lib/pluralize';
import { ButtonCustom } from '@/shared/ui/components/button';
import { ButtonIcon } from '@/shared/ui/components/button-icon';
import { CloseIcon } from '@/shared/ui/icons/close';
import classNames from 'classnames';
import styles from './styles.module.scss';

type Props = {
	products: IProductsResponse[];
	name: string;

	sort: EnumProductSortOptionPublic;
	hasNextPage: boolean;
	isFetchingNextPage: boolean;
	isFetching: boolean;
	isError: boolean;
	total?: number;
	fetchNextPage: () => void;
	page?: number;
};

export const SearchProductSection = ({
	products,
	hasNextPage,
	isError,
	isFetchingNextPage,
	name,
	isFetching,
	sort,
	total,
	fetchNextPage,
	page,
}: Props) => {
	const { openMenu } = useMenuStore();

	const { createQuery } = useQuery();
	return (
		<div className={classNames(styles.root, '_cont_limit')}>
			<div className={classNames(styles.header, 'mb-80 mt-80')}>
				<div
					className={classNames(
						styles.title,
						'fs-xl-1',
						products.length ? styles.none : ''
					)}
					data-count={products.length}
				>
					{!products.length && (
						<p className={`fs-s-1 web-lg `}>
							Ничего не найдено. Попробуйте изменить запрос и мы поищем ещё раз.
						</p>
					)}
					<div className={styles.search}>
						<ButtonCustom onClick={() => openMenu('search')} colorType='none'>
							<h1 className='fs-xxl-2 lh-no'>{name}</h1>
						</ButtonCustom>
					</div>
					<ButtonIcon onClick={() => openMenu('search')}>
						<CloseIcon />
					</ButtonIcon>
				</div>
				{!products.length && (
					<p className='fs-s-1 mob-lg mt-10 mb-45'>
						Ничего не найдено. Попробуйте изменить запрос и мы поищем ещё раз.
					</p>
				)}
			</div>

			{!!products.length && (
				<>
					<div
						className={classNames(styles.total, 'pt-25 mb-45')}
						style={{ borderTop: '1px solid var(--color-main-glass)' }}
					>
						<TotalAndSortBlock
							lenProducts={total}
							sortList={sortOptionsProductsPublic}
							pluralizeFunction={productPluralize}
							createQueryString={createQuery}
							sort={sort}
						/>
					</div>
					<section className={classNames(styles.body, 'mb-100')}>
						<LoadingBlock isLoading={isFetching && !isFetchingNextPage} />
						<InfinityScroll
							finishButton={true}
							hasNextPage={!!hasNextPage}
							isLoading={isFetchingNextPage}
							fetchNextPage={fetchNextPage}
							page={page}
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
				</>
			)}
		</div>
	);
};
