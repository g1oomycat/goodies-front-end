'use client';

import {
	FullInfoProduct,
	Gallery,
	IProductsResponse,
	SliderGallery,
} from '@/entities/product';
import { AddProductToBasketBtnText } from '@/features/add-product-to-basket';
import { AddProductToWishlistBtnIcon } from '@/features/add-product-to-wishlist';

import { getRouteCategory, getRouteMain } from '@/shared/constants/router';
import { Breadcrumbs } from '@/shared/kit/breadcrumbs';
import { ButtonCustom } from '@/shared/ui/components/button';
import classNames from 'classnames';
import styles from './styles.module.scss';

type Props = {
	product: IProductsResponse;
};

export const ProductCardSection = ({ product }: Props) => {
	const itemsBreadcrumbs = [
		{
			title: 'главная',
			href: getRouteMain(),
		},
		{
			title: product?.category.name,
			href: getRouteCategory(product.category.slug),
		},
		{ title: product.name },
	];

	return (
		<section className={classNames(styles.root, '_cont_limit')}>
			<div className='mb-140'>
				<div className='mt-20 mb-20'>
					<Breadcrumbs items={itemsBreadcrumbs} className='fs-s-1 low' />
				</div>
				<div className={styles.body}>
					<SliderGallery alt={product.name} images={product.images} />
					<Gallery alt={product.name} images={product.images} />
					<FullInfoProduct
						product={product}
						actionWishlist={
							<AddProductToWishlistBtnIcon size='m' productId={product.id} />
						}
						actionBasket={
							product.stock > 0 ? (
								<AddProductToBasketBtnText size='l' productId={product.id} />
							) : (
								<ButtonCustom fullWidth disabled size='l'>
									товара нет в наличии
								</ButtonCustom>
							)
						}
					/>
				</div>
			</div>
		</section>
	);
};
