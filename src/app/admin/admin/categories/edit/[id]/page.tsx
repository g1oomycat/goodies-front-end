'use client';
import { getOneCategoryAdmin } from '@/entities/category';
import { getRouteAdminCategories } from '@/shared/constants/router';
import { AdminH1 } from '@/shared/kit/admin-h1';
import { Breadcrumbs, BreadcrumbsProps } from '@/shared/kit/breadcrumbs';
import { AdminEditFormCategory } from '@/widgets/admin-edit/admin-edit-form-category/ui';
import classNames from 'classnames';
import { notFound, useParams } from 'next/navigation';
const BC = (namePage?: string): BreadcrumbsProps => ({
	items: [
		{ title: 'категории', href: getRouteAdminCategories() },
		{ title: namePage || '' },
	],
});

export default function AdminEditProduct() {
	const params = useParams();
	const id = params.id as string;
	const { data, isLoading, isError } = getOneCategoryAdmin(id);
	if (!isLoading && (isError || !data)) {
		notFound();
	}
	return (
		<div className={classNames('root-admin-page', 'admin-container')}>
			<Breadcrumbs {...BC(data?.name)} loading={isLoading} />
			<AdminH1 title={`категория - ${data?.name}`} loading={isLoading} />
			<AdminEditFormCategory data={data} />
		</div>
	);
}
