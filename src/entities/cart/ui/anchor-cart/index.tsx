import { formatCurrency } from '@/shared/lib/format-сurrency';
import { ReactNode } from 'react';
import styles from './styles.module.scss';
export type AnchorProps = {
	sale: number;
	price: number;

	actionOrder: ReactNode;
};

export const AnchorCart = ({ actionOrder, price, sale }: AnchorProps) => {
	return (
		<div className={styles.body}>
			<div className={styles.totals}>
				{!!sale && (
					<div className={styles.sale}>
						<span className='fs-up-1'>скидка</span>
						<span className='fs-s-3'>{formatCurrency(sale)}</span>
					</div>
				)}
				<div className={styles.price}>
					<span className='fs-up-1'>итого</span>
					<span className='fs-s-3'>{formatCurrency(price)}</span>
				</div>
			</div>
			<div className={styles.button}>{actionOrder}</div>
		</div>
	);
};
