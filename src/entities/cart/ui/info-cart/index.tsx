import { formatCurrency } from '@/shared/lib/format-сurrency';
import classNames from 'classnames';

import { ReactNode } from 'react';
import { ICartResponse } from '../../types';
import styles from './styles.module.scss';
type Props = {
	data: ICartResponse;
	actionOrder: ReactNode;
};

export const InfoCart = ({ data, actionOrder }: Props) => {
	return (
		<div className={classNames(styles.total_cart, 'mb-10 gap-25')}>
			<div className={'fs-l-1 fw-500'} style={{ textAlign: 'start' }}>
				<span>сумма заказа</span>
			</div>

			<dl className={classNames(styles.list, 'gap-15 fs-s-3')}>
				<div className={classNames('data--item', styles.total)}>
					<dt className={'data--key'}>стоимость продуктов</dt>
					<dd className={'data--value'}>
						{formatCurrency(data?.originalTotal ?? 0)}
					</dd>
				</div>
				{!!data?.discount && (
					<div className={classNames('data--item', styles.sale)}>
						<dt className={'data--key'}>скидка</dt>
						<dd className={'data--value'}>
							{formatCurrency(data?.discount ?? 0)}
						</dd>
					</div>
				)}
			</dl>

			<div className={classNames(styles.final_total, 'gap-20 fw-500')}>
				<span className={'fs-s-3'}>итого</span>
				<span className={'fs-l-1'}>{formatCurrency(data?.total ?? 0)}</span>
			</div>
			<div>{actionOrder}</div>
		</div>
	);
};
