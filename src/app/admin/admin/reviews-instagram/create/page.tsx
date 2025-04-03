import { AdminReviewsInstForm } from '@/features/admin-forms/admin-reviews-inst-form';
import { getRouteAdminReviewsInstagram } from '@/shared/constants/router';
import { AdminH1 } from '@/shared/kit/admin-h1';
import { Breadcrumbs, BreadcrumbsProps } from '@/shared/kit/breadcrumbs';
import classNames from 'classnames';
const BC: BreadcrumbsProps = {
	items: [
		{ title: 'отзывы инсты', href: getRouteAdminReviewsInstagram() },
		{
			title: 'создание отзыва инсты',
		},
	],
};
export default function AdminCreateProduct() {
	return (
		<div className={classNames('root-admin-page admin-container')}>
			<Breadcrumbs {...BC} />
			<AdminH1 title='создание отзыва инсты' />
			<AdminReviewsInstForm />
		</div>
	);
}
