'use client';

import { EnumOrderSortOptionPublic, sortMapOrders } from '@/entities/orders';
import { getAllOrdersSelf } from '@/entities/orders/model/public/public-get-all-self';
import { useMenuStore } from '@/shared/config/burger-menu-store';
import { useLoadingGlobalStore } from '@/shared/config/loading-global-store';
import { getEnumValue } from '@/shared/lib/get-enum-value';
import { ButtonCustom } from '@/shared/ui/components/button';
import { OrdersList } from '@/widgets/orders-list';
import { useSearchParams } from 'next/navigation';
import { useEffect } from 'react';

const LIMIT = 15;

export default function Page() {
	const searchParams = useSearchParams();
	const { setLoading } = useLoadingGlobalStore();
	const { openMenu } = useMenuStore();
	const page = Math.max(Number(searchParams.get('page')), 1);

	const sort =
		getEnumValue(EnumOrderSortOptionPublic, searchParams.get('sort')) ??
		EnumOrderSortOptionPublic.NEW;
	const { sortBy, sort: finalSort } = sortMapOrders[sort];

	const { data, isError, isLoading, isFetching } = getAllOrdersSelf({
		page,
		limit: LIMIT,
		sort: finalSort,
		sortBy,
	});
	useEffect(() => {
		if (!isLoading && data) setLoading(false);
	}, [data, isLoading]);

	if (!data) return <></>;
	if (!data.totalResult)
		return (
			<p>
				У вас пока нет заказов. Посмотрите наш{' '}
				<ButtonCustom
					onClick={() => openMenu('catalog')}
					colorType='none'
					style={{ color: 'var(--color-red)' }}
				>
					каталог
				</ButtonCustom>{' '}
				или воспользуйтесь{' '}
				<ButtonCustom
					onClick={() => openMenu('search')}
					colorType='none'
					style={{ color: 'var(--color-red)' }}
				>
					поиском
				</ButtonCustom>{' '}
				если ищете что-то конкретное
			</p>
		);

	return <OrdersList data={data} sort={sort} isFetching={isFetching} />;
}
