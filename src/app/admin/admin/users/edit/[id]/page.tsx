'use client';

import { getOneUserAdmin } from '@/entities/user';
import { getRouteAdminUsers } from '@/shared/constants/router';
import { AdminH1 } from '@/shared/kit/admin-h1';
import { Breadcrumbs, BreadcrumbsProps } from '@/shared/kit/breadcrumbs';
import { AdminEditFormUser } from '@/widgets/admin-edit';
import classNames from 'classnames';
import { notFound, useParams } from 'next/navigation';

const BC = (namePage?: string): BreadcrumbsProps => ({
	items: [
		{ title: 'пользователи', href: getRouteAdminUsers() },
		{ title: namePage ?? '' },
	],
});

export default function AdminEditUser() {
	const params = useParams();
	const id = params.id as string;
	const { data, isLoading, isError } = getOneUserAdmin(id);
	if (!isLoading && (isError || !data)) {
		notFound();
	}
	return (
		<div className={classNames('root-admin-page', 'admin-container')}>
			<Breadcrumbs {...BC(data?.email)} loading={isLoading} />
			<AdminH1 title={`Пользователь - ${data?.email}`} loading={isLoading} />
			<AdminEditFormUser data={data} />
		</div>
	);
}
