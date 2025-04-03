'use client';

import {
	EnumDeliveryMethod,
	EnumOrdersSort,
	EnumOrderStatus,
	EnumPaymentMethod,
	getAllOrdersAdmin,
} from '@/entities/orders';
import { AdminH1 } from '@/shared/kit/admin-h1';
import { Breadcrumbs, BreadcrumbsProps } from '@/shared/kit/breadcrumbs';
import { PAGE_SIZE_OPTIONS } from '@/shared/kit/data-grid/page-size-option';
import { getEnumValue } from '@/shared/lib/get-enum-value';
import { EnumParamsSort } from '@/shared/types/sort';
import { AdminTableOrders } from '@/widgets/admin-table/admin-table-orders';
import { AdminToolbarOrders } from '@/widgets/admin-toolbar/admin-toolbar-orders';

import classNames from 'classnames';
import { useSearchParams } from 'next/navigation';
const BREADCRUMB: BreadcrumbsProps = {
	items: [{ title: 'заказы' }],
};
export default function AdminOrdersPage() {
	const searchParams = useSearchParams();
	const params = Object.fromEntries(searchParams.entries());

	const userId = params.userId ?? undefined;
	const publicId = params.publicId ?? undefined;
	const email = params.email ?? undefined;
	const phone = params.phone ?? undefined;

	const status = getEnumValue(EnumOrderStatus, params.status);
	const deliveryMethod = getEnumValue(
		EnumDeliveryMethod,
		params.deliveryMethod
	);
	const paymentMethod = getEnumValue(EnumPaymentMethod, params.paymentMethod);

	const page = Number(params.page ?? 1);
	const limit = Number(params.limit ?? PAGE_SIZE_OPTIONS[0]);
	const sortBy = getEnumValue(EnumOrdersSort, params.sortBy);
	const sort = getEnumValue(EnumParamsSort, params.sort);

	const { data, isFetching } = getAllOrdersAdmin({
		userId,
		publicId,
		email,
		phone,
		status,
		deliveryMethod,
		paymentMethod,
		page,
		limit,
		sort,
		sortBy,
	});

	return (
		<div className={classNames('root-admin-page', 'admin-container')}>
			<Breadcrumbs {...BREADCRUMB} />
			<AdminH1 title='заказы' />
			<AdminToolbarOrders
				disabled={isFetching}
				formParams={{
					userId,
					publicId,
					email,
					phone,
					status,
					deliveryMethod,
					paymentMethod,
				}}
			/>
			<AdminTableOrders
				data={data}
				isFetching={isFetching}
				page={page}
				limit={limit}
				sortBy={sortBy}
				sort={sort}
			/>
		</div>
	);
}
