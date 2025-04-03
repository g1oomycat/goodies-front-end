import { IProductsResponse } from '@/entities/product';
import { getRouteAdminProductEdit } from '@/shared/constants/router';
import { formatCurrency } from '@/shared/lib/format-сurrency';
import { LinkCustom } from '@/shared/ui/components/link';
import Image from 'next/image';
import { ReactNode } from 'react';
import { IOrderItemResponse } from '../../types';
import styles from './styles.module.scss';

type Props = {
	orderItemData?: IOrderItemResponse;
	productData?: IProductsResponse;
	counterAction?: ReactNode;
	deleteAction?: ReactNode;
	addAction?: ReactNode;
};

export const OrderItemCard = ({
	orderItemData,
	counterAction,
	deleteAction,
	productData,
	addAction,
}: Props) => {
	// Определяем продукт
	const correctProduct: IProductsResponse | undefined =
		orderItemData?.product || productData;

	if (!correctProduct) {
		return <div className={styles.root}>Продукт не найден</div>;
	}

	return (
		<div className={styles.root}>
			<div className={styles.body}>
				<div className={styles.image}>
					<Image
						src={correctProduct.images?.[0] || '/fallback.jpg'}
						alt={correctProduct.name}
						fill
					/>
				</div>
				<div className={styles.name}>
					<LinkCustom href={getRouteAdminProductEdit(correctProduct.id)}>
						{correctProduct.name}
					</LinkCustom>
				</div>
				<div className={styles.info}>
					<div className={styles.totals}>
						{!!addAction && (
							<div className={styles.item}>
								<div style={{ marginBottom: 10 }}>{addAction}</div>
							</div>
						)}
						{!!orderItemData && (
							<Totals
								price={orderItemData.unitPrice}
								quantity={orderItemData.quantity}
							/>
						)}
						{!!productData && <Totals price={correctProduct.price} />}

						{(!!counterAction || !!deleteAction) && (
							<div className={styles.item}>
								{!!counterAction && (
									<div style={{ marginBottom: 10 }}>{counterAction}</div>
								)}
								{!!deleteAction && <div className='fs-s-2'>{deleteAction}</div>}
							</div>
						)}
					</div>
				</div>
			</div>
		</div>
	);
};

const Totals = ({ price, quantity }: { price: number; quantity?: number }) => (
	<>
		<div className={styles.item} style={{ opacity: 0.8 }}>
			<span className='fs-s-low-3'>{formatCurrency(price)}</span>
			<span className='fs-s-low-1'>стоимость</span>
			<span className='fs-s-low-1'>1-го товара</span>
		</div>
		{!!quantity && (
			<div className={styles.item}>
				<span className='fs-s-low-3'>{formatCurrency(price * quantity)}</span>
				<span className='fs-s-low-1'>общая</span>
				<span className='fs-s-low-1'>стоимость</span>
			</div>
		)}
	</>
);
