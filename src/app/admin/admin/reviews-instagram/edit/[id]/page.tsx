'use client';
import { getOneReviewInstAdmin } from '@/entities/reviews-inst';
import { getRouteAdminReviewsInstagram } from '@/shared/constants/router';
import { AdminH1 } from '@/shared/kit/admin-h1';
import { Breadcrumbs, BreadcrumbsProps } from '@/shared/kit/breadcrumbs';
import { AdminEditFormReviewInst } from '@/widgets/admin-edit/admin-edit-form-review-inst';
import classNames from 'classnames';
import { notFound, useParams } from 'next/navigation';
const BC = (namePage?: string): BreadcrumbsProps => ({
	items: [
		{ title: 'отзывы инсты', href: getRouteAdminReviewsInstagram() },
		{ title: namePage || '' },
	],
});

export default function AdminEditProduct() {
	const params = useParams();
	const id = params.id as string;
	const { data, isLoading, isError } = getOneReviewInstAdmin(id);
	if (!isLoading && (isError || !data)) {
		notFound();
	}
	return (
		<div className={classNames('root-admin-page', 'admin-container')}>
			<Breadcrumbs {...BC(data?.nick)} loading={isLoading} />
			<AdminH1 title={`отзыв инсты - ${data?.nick}`} loading={isLoading} />
			<AdminEditFormReviewInst data={data} />
		</div>
	);
}
