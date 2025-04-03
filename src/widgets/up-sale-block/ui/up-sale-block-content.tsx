'use client';

import { IProductsResponse, ProductCard } from '@/entities/product';

import { AddProductToBasketBtnIcon } from '@/features/add-product-to-basket';
import { AddProductToWishlistIcon } from '@/features/add-product-to-wishlist';
import { ButtonIcon } from '@/shared/ui/components/button-icon';
import { ArrowLeftIcon } from '@/shared/ui/icons/arrow_left';
import { ArrowRightIcon } from '@/shared/ui/icons/arrow_right';
import classNames from 'classnames';
import { Swiper, SwiperSlide } from 'swiper/react';
import { configSliderUpSale, sortOptionsUpSale } from '../lib';
import { IUpSaleSort } from '../types';
import styles from './styles.module.scss';

type Props = { data: IProductsResponse[]; sort: IUpSaleSort };

export const UpSaleBlockContent = ({ data, sort }: Props) => {
	return (
		<section className={classNames(styles.root, '_cont_limit')}>
			<div className='mb-140'>
				<div className={classNames(styles.header, 'mb-40 ')}>
					<div className={styles.title}>
						<h2>{sortOptionsUpSale.find(el => el.sort === sort)?.label}</h2>
					</div>
					<div className={styles.nav}>
						<div className={classNames(styles.nav_slider, 'gap-20 fs-xl-1')}>
							<ButtonIcon className={styles.prevButton}>
								<ArrowLeftIcon />
							</ButtonIcon>
							<ButtonIcon className={styles.nextButton}>
								<ArrowRightIcon />
							</ButtonIcon>
						</div>
					</div>
				</div>
				<div className={styles.wrapper}>
					<Swiper
						{...configSliderUpSale({
							horizontalClass: `${styles.scroll_bar_hor}`,
							nextEl: `.${styles.nextButton}`,
							prevEl: `.${styles.prevButton}`,
						})}
						className={styles.swiper}
					>
						{data?.map(product => (
							<SwiperSlide key={product.id} className={styles.slide}>
								<ProductCard
									data={product}
									actionAddWishlist={
										<AddProductToWishlistIcon productId={product.id} />
									}
									actionAddBasket={
										<AddProductToBasketBtnIcon productId={product.id} />
									}
								/>
							</SwiperSlide>
						))}
					</Swiper>
				</div>
			</div>
		</section>
	);
};
