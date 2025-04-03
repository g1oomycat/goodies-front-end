'use client';

import { orderPluralize } from '@/shared/lib/pluralize';

import {
	CardOrder,
	IGetAllOrdersResponse,
	sortOptionsOrdersPublic,
} from '@/entities/orders';

import { LoadingBlock } from '@/shared/components/loading-block';
import { useQuery } from '@/shared/hooks/useQuery';
import { PaginationANTD } from '@/shared/kit/pagination';
import { TotalAndSortBlock } from '@/shared/kit/total-and-sort-block';
import classNames from 'classnames';
import styles from './styles.module.scss';

type Props = {
	data: IGetAllOrdersResponse;
	sort: string;
	isFetching: boolean;
};

export const OrdersList = ({ data, sort, isFetching }: Props) => {
	const { createQuery } = useQuery();
	return (
		<>
			<div
				className='mb-45 pt-25'
				style={{ borderTop: '1px solid var(--color-main-glass)' }}
			>
				<TotalAndSortBlock
					lenProducts={data.totalCount}
					sortList={sortOptionsOrdersPublic}
					pluralizeFunction={orderPluralize}
					createQueryString={createQuery}
					sort={sort}
				/>
			</div>
			<div style={{ position: 'relative' }}>
				<LoadingBlock isLoading={isFetching} />
				<section className={classNames(styles.flex)}>
					{data.result.map(order => (
						<div className={styles.item} key={order.id}>
							<CardOrder data={order} />
						</div>
					))}
				</section>
				<PaginationANTD
					createQueryString={createQuery}
					totalCount={data.totalCount}
					limit={data.limit}
					page={data.page}
				/>
			</div>
		</>
	);
};
