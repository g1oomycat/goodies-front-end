import { AdminBannerForm } from '@/features/admin-forms/admin-banner-form/ui';
import { getRouteAdminBanners } from '@/shared/constants/router';
import { AdminH1 } from '@/shared/kit/admin-h1';
import { Breadcrumbs, BreadcrumbsProps } from '@/shared/kit/breadcrumbs';
import classNames from 'classnames';
const BC: BreadcrumbsProps = {
	items: [
		{ title: 'баннеры', href: getRouteAdminBanners() },
		{
			title: 'создание баннера',
		},
	],
};
export default function AdminCreateProduct() {
	return (
		<div className={classNames('root-admin-page', 'admin-container')}>
			<Breadcrumbs {...BC} />
			<AdminH1 title='создание баннера' />
			<AdminBannerForm />
		</div>
	);
}
