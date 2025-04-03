import { AdminUserForm } from '@/features/admin-forms/admin-user-form';
import { getRouteAdminUsers } from '@/shared/constants/router';
import { AdminH1 } from '@/shared/kit/admin-h1';
import { Breadcrumbs, BreadcrumbsProps } from '@/shared/kit/breadcrumbs';
import classNames from 'classnames';
const BC: BreadcrumbsProps = {
	items: [
		{ title: 'пользователи', href: getRouteAdminUsers() },
		{
			title: 'создание пользователя',
		},
	],
};
export default function AdminCreateUser() {
	return (
		<div className={classNames('root-admin-page admin-container')}>
			<Breadcrumbs {...BC} />
			<AdminH1 title='создание пользователя' />
			<AdminUserForm />
		</div>
	);
}
