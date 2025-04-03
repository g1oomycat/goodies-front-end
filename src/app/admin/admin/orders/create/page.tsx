import { getRouteAdminOrders } from '@/shared/constants/router';
import { AdminH1 } from '@/shared/kit/admin-h1';
import { Breadcrumbs, BreadcrumbsProps } from '@/shared/kit/breadcrumbs';
import { AdminEditCreateFormOrder } from '@/widgets/admin-edit/admin-edit-create-form-order';
import classNames from 'classnames';
const BC: BreadcrumbsProps = {
	items: [
		{ title: 'заказы', href: getRouteAdminOrders() },
		{
			title: 'создание заказа',
		},
	],
};
export default function AdminCreateOrder() {
	return (
		<div className={classNames('root-admin-page admin-container')}>
			<Breadcrumbs {...BC} />
			<AdminH1 title='создание заказа' />
			<AdminEditCreateFormOrder />
		</div>
	);
}
