import { getRouteProduct } from '@/shared/constants/router';
import { formatCurrency } from '@/shared/lib/format-сurrency';

import { productCardBlur } from '@/shared/constants/blur-data-url';
import classNames from 'classnames';
import Image from 'next/image';
import Link from 'next/link';
import { ReactNode } from 'react';
import { IProductsResponse } from '../../types/api';
import styles from './styles.module.scss';

type Props = {
	data: IProductsResponse;
	actionAddWishlist: ReactNode;
	actionAddBasket: ReactNode;
	cn?: string;
};

export const ProductCard = ({
	data,
	actionAddWishlist,
	actionAddBasket,
	cn,
}: Props) => {
	return (
		<div className={classNames(styles.product_card, cn)}>
			<Link
				href={getRouteProduct(data.slug)}
				className={styles.link}
				style={{ opacity: !data.stock ? 0.4 : 1 }}
			>
				<div className={styles.image_block}>
					<Image
						src={data.images[0]}
						alt={data.name}
						className='_image_cover'
						height={370}
						width={370}
						placeholder='blur'
						blurDataURL={productCardBlur}
						sizes='(max-width: 600px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, (max-width: 1536px) 25vw, (max-width: 1920px) 25vw, 20vw'
					/>
				</div>
				<div className={classNames(styles.info, 'mt-20', 'mb-20')}>
					<span className={classNames(styles.category, 'fs-up-3 mb-15')}>
						{data.category?.name}
					</span>
					<span className={classNames(styles.name, 'fs-m-2 mb-15 fw-500')}>
						{data.name}
					</span>
					<div
						className={classNames(styles.price, 'fs-m-2 fw-500 gap-15 lh-no')}
					>
						<span>{formatCurrency(data.price)}</span>
						{!!data.discount && (
							<div className={'old_price'}>{formatCurrency(data.oldPrice)}</div>
						)}
					</div>
				</div>
			</Link>
			{!data.stock && (
				<div className={styles.zero_stock}>
					<div className={classNames(styles.blanc, 'fw-500 low fs-s-1')}>
						нет в наличии
					</div>
				</div>
			)}
			<div className={styles.wrapper_futures}>
				<div className={styles.wishlist}>{actionAddWishlist}</div>
				{!!data.stock && <div className={styles.basket}>{actionAddBasket}</div>}
			</div>
		</div>
	);
};
