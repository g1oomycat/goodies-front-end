'use client';
import { getAdminOneProduct } from '@/entities/product';
import { getRouteAdminProducts } from '@/shared/constants/router';
import { AdminH1 } from '@/shared/kit/admin-h1';
import { Breadcrumbs, BreadcrumbsProps } from '@/shared/kit/breadcrumbs';
import { AdminEditFormProduct } from '@/widgets/admin-edit/admin-edit-form-product';
import classNames from 'classnames';
import { notFound, useParams } from 'next/navigation';
const BC = (namePage?: string): BreadcrumbsProps => ({
	items: [
		{ title: 'Товары', href: getRouteAdminProducts() },
		{ title: namePage || '' },
	],
});

export default function AdminEditProduct() {
	const params = useParams();
	const id = params.id as string;
	const { data, isLoading, isError } = getAdminOneProduct(id);
	if (!isLoading && (isError || !data)) {
		notFound();
	}
	return (
		<div className={classNames('root-admin-page', 'admin-container')}>
			<Breadcrumbs {...BC(data?.name)} loading={isLoading} />
			<AdminH1 title={`товар - ${data?.name}`} loading={isLoading} />
			<AdminEditFormProduct data={data} />
		</div>
	);
}
