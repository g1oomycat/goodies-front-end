import { AdminProductForm } from '@/features/admin-forms/admin-product-form';
import { getRouteAdminProducts } from '@/shared/constants/router';
import { AdminH1 } from '@/shared/kit/admin-h1';
import { Breadcrumbs, BreadcrumbsProps } from '@/shared/kit/breadcrumbs';
const BC: BreadcrumbsProps = {
	items: [
		{ title: 'товары', href: getRouteAdminProducts() },
		{
			title: 'создание товара',
		},
	],
};
export default function AdminCreateProduct() {
	return (
		<div className={'root-admin-page admin-container'}>
			<Breadcrumbs {...BC} />
			<AdminH1 title='создание товара' />
			<AdminProductForm />
		</div>
	);
}
