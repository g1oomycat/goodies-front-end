'use client';
import { getOneBannerAdmin } from '@/entities/banner';
import { getRouteAdminBanners } from '@/shared/constants/router';
import { AdminH1 } from '@/shared/kit/admin-h1';
import { Breadcrumbs, BreadcrumbsProps } from '@/shared/kit/breadcrumbs';
import { AdminEditFormBanner } from '@/widgets/admin-edit/admin-edit-form-banner';
import classNames from 'classnames';
import { notFound, useParams } from 'next/navigation';
const BC = (namePage?: string): BreadcrumbsProps => ({
	items: [
		{ title: 'Баннеры', href: getRouteAdminBanners() },
		{ title: namePage || '' },
	],
});

export default function AdminEditProduct() {
	const params = useParams();
	const id = params.id as string;
	const { data, isLoading, isError } = getOneBannerAdmin(id);
	if (!isLoading && (isError || !data)) {
		notFound();
	}
	console.log(data);

	return (
		<div className={classNames('root-admin-page admin-container')}>
			<Breadcrumbs {...BC(data?.title)} loading={isLoading} />
			<AdminH1 title={`баннер - ${data?.title}`} loading={isLoading} />
			<AdminEditFormBanner data={data} />
		</div>
	);
}
