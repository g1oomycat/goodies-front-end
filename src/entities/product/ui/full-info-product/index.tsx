import { OpenerBlock } from '@/shared/kit/opener-block';
import { capitalizeFirstLetter } from '@/shared/lib/capitalize-first-letter';

import { formatCurrency, formatPercentage } from '@/shared/lib/format-сurrency';
import classNames from 'classnames';
import { ReactNode } from 'react';

import { deliveryAndReturnsMock } from '../../lib/constants/delivery-and-returns-mock';
import { IProductsResponse } from '../../types/api';
import { FullInfoProductActions } from './actions';
import styles from './styles.module.scss';

type Props = {
	product: IProductsResponse;
	actionWishlist: ReactNode;
	actionBasket: ReactNode;
};

export const FullInfoProduct = ({
	product,
	actionWishlist,
	actionBasket,
}: Props) => {
	const textList = product.attributes
		? product.attributes.map(el => ({
				name: el.title,
				text: capitalizeFirstLetter(el.value),
		  }))
		: [];

	return (
		<div className={styles.info_column}>
			<div className={styles.sticky_block}>
				<div className={styles.top}>
					<div className={styles.main}>
						<div className='mb-30'>
							<h1>{product.name}</h1>
						</div>
						<div className={classNames(styles.prices, 'gap-30', 'mb-30')}>
							<div className={styles.prices_item}>
								<span className='fs-l-2 fw-500'>
									{formatCurrency(product.price)}
								</span>
								{!!product.discount && (
									<span
										className='fs-s-1'
										style={{ color: 'var(--color-pink)' }}
									>{`со скидкой ${formatPercentage(
										product.percentageChange
									)}`}</span>
								)}
							</div>
							{!!product.discount && (
								<div className={styles.prices_item}>
									<span className='fs-l-2 fw-500 old_price'>
										{formatCurrency(product.oldPrice)}
									</span>
									<span className='fs-s-1' style={{ opacity: 0.4 }}>
										без скидки
									</span>
								</div>
							)}
						</div>
						<div className='mb-50'>
							<p>{product.description}</p>
						</div>
						<FullInfoProductActions
							actionBasket={actionBasket}
							actionWishlist={actionWishlist}
						/>
					</div>
				</div>

				<OpenerBlock
					informationList={[{ name: 'Характеристики', textList }].concat(
						deliveryAndReturnsMock
					)}
					isOpenFirstItem={true}
				/>
			</div>
		</div>
	);
};
