'use client';

import { getOneOrderAdmin } from '@/entities/orders';
import { getRouteAdminOrders } from '@/shared/constants/router';
import { AdminH1 } from '@/shared/kit/admin-h1';
import { Breadcrumbs, BreadcrumbsProps } from '@/shared/kit/breadcrumbs';
import { AdminEditCreateFormOrder } from '@/widgets/admin-edit/admin-edit-create-form-order';

import classNames from 'classnames';
import { notFound, useParams } from 'next/navigation';
const BC = (namePage?: string): BreadcrumbsProps => ({
	items: [
		{ title: 'заказы', href: getRouteAdminOrders() },
		{ title: namePage || '' },
	],
});

export default function AdminEditOrder() {
	const params = useParams();
	const id = params.id as string;
	const { data, isLoading, isError } = getOneOrderAdmin(id);
	if (!isLoading && (isError || !data)) {
		notFound();
	}
	return (
		<div className={classNames('root-admin-page', 'admin-container')}>
			<Breadcrumbs {...BC(data?.publicId)} loading={isLoading} />
			<AdminH1 title={`Заказ - ${data?.publicId}`} loading={isLoading} />
			<AdminEditCreateFormOrder data={data} type='edit' />
		</div>
	);
}
