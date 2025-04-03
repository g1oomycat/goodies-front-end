import { ArrowStatus } from '@/shared/kit/arrow-status';
import { formatDateShort } from '@/shared/lib/format-date';
import { formatCurrency } from '@/shared/lib/format-сurrency';
import classNames from 'classnames';
import Image from 'next/image';
import Link from 'next/link';

import { ArrowRightIcon } from '@/shared/ui/icons/arrow_right';
import { orderStatusMeta } from '../../lib';
import { IOrdersResponse } from '../../types';
import styles from './styles.module.scss';

type Props = {
	data: IOrdersResponse;
};

export const CardOrder = ({ data }: Props) => {
	const { bgColor, label, textColor } = orderStatusMeta[data.status];
	return (
		<Link href='' className={styles.wrapper}>
			<div className={styles.body}>
				<div className={styles.info_order}>
					<div className={classNames(styles.head, 'fs-s-1')}>
						<div
							className={classNames(styles.status, 'fw-500')}
							style={{ backgroundColor: bgColor, color: textColor }}
						>
							{label}
						</div>
						<div>№ {data.publicId}</div>
					</div>
					<div className={styles.footer}>
						<div className={classNames(styles.date_progress, 'fs-l-1 fw-500')}>
							<div className={styles.date}>
								{formatDateShort(data.createdAt)}
							</div>

							<ArrowStatus heightIcon={20} isCompleted={data.completed} />

							<div className={styles.date}>
								{formatDateShort(data.expectedDate)}
							</div>
						</div>
						<div className={classNames(styles.text_progress, 'fs-xs-3')}>
							<span>дата заказа</span>
							<span>{data.completed ? 'заказ выполнен' : 'дата доставки'}</span>
						</div>
					</div>
				</div>
				<div className={styles.products}>
					<span
						className={'fs-s-1 fw-500'}
					>{`состав / ${data.quantity} шт.`}</span>
					<div className={styles.img_flex}>
						{data.orderItems?.map(item => (
							<div className={styles.img_wrapper} key={item.id}>
								<Image
									src={item.product?.images[0] || ''}
									alt={item.product?.name || ''}
									width={65}
									height={65}
								/>
								{item.quantity > 1 && (
									<span className={styles.quantity_item}>x{item.quantity}</span>
								)}
							</div>
						))}
					</div>
				</div>
				<div className={styles.total_block}>
					<div className={styles.text}>
						<span className={'fs-s-1 fw-500 mb-5'}>сумма</span>
						<span className={'fs-m-1 fw-500'}>
							{formatCurrency(data.total)}
						</span>
					</div>
					<div className={styles.button}>
						<ArrowRightIcon />
					</div>
				</div>
			</div>
		</Link>
	);
};
