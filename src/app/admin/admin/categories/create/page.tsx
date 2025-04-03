import { AdminCategoryForm } from '@/features/admin-forms/admin-category-form';
import { getRouteAdminCategories } from '@/shared/constants/router';
import { AdminH1 } from '@/shared/kit/admin-h1';
import { Breadcrumbs, BreadcrumbsProps } from '@/shared/kit/breadcrumbs';
import classNames from 'classnames';
const BC: BreadcrumbsProps = {
	items: [
		{ title: 'категории', href: getRouteAdminCategories() },
		{
			title: 'создание категории',
		},
	],
};
export default function AdminCreateProduct() {
	return (
		<div className={classNames('root-admin-page admin-container')}>
			<Breadcrumbs {...BC} />
			<AdminH1 title='создание категории' />
			<AdminCategoryForm />
		</div>
	);
}
