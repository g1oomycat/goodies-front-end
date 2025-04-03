'use client';
import {
	EnumOrderStatus,
	IOrderStatusHistoryResponse,
	orderStatusMeta,
} from '@/entities/orders';
import { formatDateShort } from '@/shared/lib/format-date';
import { CanceledIcon } from '@/shared/ui/icons/canceled';
import { CompletedIcon } from '@/shared/ui/icons/completed';
import classNames from 'classnames';
import { motion } from 'framer-motion';
import { useRef } from 'react';
import styles from './styles.module.scss';

type Props = {
	data: IOrderStatusHistoryResponse[];
	expectedDate: string;
};
export const OrderHistoryStatus = ({ data, expectedDate }: Props) => {
	const ourRef = useRef<HTMLDivElement | null>(null);
	const isCompleted = data.some(el => el.status === EnumOrderStatus.COMPLETED);
	const isCanceledOrReturned = data.some(
		el =>
			el.status === EnumOrderStatus.CANCELLED ||
			el.status === EnumOrderStatus.RETURNED
	);

	return (
		<div ref={ourRef} className={styles.history_status_cont}>
			<motion.div
				drag={data.length <= 2 ? undefined : 'x'}
				dragConstraints={ourRef}
				className={styles.body}
				style={{ width: data.length <= 2 ? '100%' : 100 * (data.length + 2) }}
			>
				<div className={styles.line}></div>

				<div className={styles.items}>
					{data.map((el, index) => (
						<div className={styles.item} key={index}>
							<div className={styles.point_cont}>
								{![
									EnumOrderStatus.COMPLETED,
									EnumOrderStatus.CANCELLED,
									EnumOrderStatus.RETURNED,
								].includes(el.status) && <div className={styles.point}></div>}

								{el.status === EnumOrderStatus.COMPLETED && (
									<div
										className={classNames(
											styles.icon,
											styles[index === data.length - 1 ? 'right' : 'left']
										)}
									>
										<CompletedIcon height={20} />
									</div>
								)}
								{(el.status === EnumOrderStatus.CANCELLED ||
									el.status === EnumOrderStatus.RETURNED) && (
									<div className={classNames(styles.icon, styles.right)}>
										<CanceledIcon height={20} />
									</div>
								)}
							</div>
							<div className='fs-s-3 fw-500 low'>
								{formatDateShort(el.changedAt)}
							</div>
							<div className='fs-xs-3 low'>
								{orderStatusMeta[el.status].label}
							</div>
						</div>
					))}
					{!(isCompleted || isCanceledOrReturned) && (
						<div className={styles.item}>
							<div className={styles.point_cont}>
								<div
									className={classNames(styles.icon, styles.right)}
									style={{ backgroundColor: 'inherit' }}
								>
									<div className={styles.arrow}></div>
								</div>
							</div>
							<div className='fs-s-3 fw-500 low'>
								{formatDateShort(expectedDate)}
							</div>
							<div className='fs-xs-3 low'>дата доставки</div>
						</div>
					)}
				</div>
			</motion.div>
		</div>
	);
};
