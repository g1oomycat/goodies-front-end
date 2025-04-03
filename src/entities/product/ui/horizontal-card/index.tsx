import { getRouteProduct } from '@/shared/constants/router';
import { formatCurrency } from '@/shared/lib/format-сurrency';
import classNames from 'classnames';
import Image from 'next/image';

import { IOrderItemResponse } from '@/entities/orders';

import Link from 'next/link';
import { ReactNode } from 'react';
import styles from './styles.module.scss';

type Props = {
	data: IOrderItemResponse;
	actionCounter?: ReactNode;
	actionFavorite?: ReactNode;
	actionDeleteCart?: ReactNode;
	actionBlur?: ReactNode;
};

export const HorizontalProductCard = ({
	data,
	actionBlur,
	actionCounter,
	actionDeleteCart,
	actionFavorite,
}: Props) => {
	const { product, quantity } = data;
	return (
		<div className={styles.card}>
			<div className={styles.wrapper}>
				<div className={styles.image}>
					<Image
						src={product.images[0]}
						alt={`${product.name}-корзина`}
						sizes='5vw'
						fill
					/>
				</div>
				<Link href={getRouteProduct(product.slug)} className={styles.info}>
					<div className={styles.info_block}>
						<div className={classNames(styles.category, 'fs-up-2')}>
							<span>{product.category.name}</span>
							<div className={styles.mob_actions}>
								{actionFavorite}
								{actionDeleteCart}
							</div>
						</div>
						<span className='fs-s-3'>{product.name}</span>
					</div>
				</Link>
				<div className={classNames(styles.actions)}>
					{!!actionCounter && (
						<div className={'fs-s-2 mb-10'}>{actionCounter}</div>
					)}
					<div className={classNames(styles.block_buttons, 'fs-m-1')}>
						{actionFavorite}
						{actionDeleteCart}
					</div>
					<div className={styles.total}>
						{!!product.discount && (
							<div className={classNames(styles.sale, 'fs-xs-3')}>
								<span>скидка </span>
								<span>{formatCurrency(product.discount * quantity)}</span>
							</div>
						)}
						<div className={classNames(styles.prices, 'fs-s-3 fw-500 gap-20')}>
							{!!product.discount && !!product.oldPrice && (
								<span className='old_price'>
									{formatCurrency(product.oldPrice * quantity)}
								</span>
							)}
							<span>{formatCurrency(product.price * quantity)}</span>
						</div>
					</div>
				</div>
			</div>
			<div className={styles.footer}>
				{!!actionCounter && <div className={'fs-s-2'}>{actionCounter}</div>}
				<div className={styles.total}>
					{!!product.discount && (
						<div className={classNames(styles.sale, 'fs-xs-3')}>
							<span>скидка </span>
							<span>{formatCurrency(product.discount * quantity)}</span>
						</div>
					)}
					<div className={classNames(styles.prices, 'fs-s-3 fw-500 gap-20')}>
						{!!product.discount && !!product.oldPrice && (
							<span className='old_price'>
								{formatCurrency(product.oldPrice * quantity)}
							</span>
						)}
						<span>{formatCurrency(product.price * quantity)}</span>
					</div>
				</div>
			</div>
			<>{!!actionBlur && actionBlur}</>
		</div>
	);
};
