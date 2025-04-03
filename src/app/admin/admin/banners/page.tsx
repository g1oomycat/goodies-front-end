'use client';

import { EnumBannerSort, getAllBanners } from '@/entities/banner';
import { AdminH1 } from '@/shared/kit/admin-h1';
import { Breadcrumbs, BreadcrumbsProps } from '@/shared/kit/breadcrumbs';
import { PAGE_SIZE_OPTIONS } from '@/shared/kit/data-grid/page-size-option';
import { getEnumValue } from '@/shared/lib/get-enum-value';
import { EnumParamsSort } from '@/shared/types/sort';
import { AdminTableBanner } from '@/widgets/admin-table';
import { AdminToolbarBanner } from '@/widgets/admin-toolbar';

import classNames from 'classnames';
import { useSearchParams } from 'next/navigation';

const BREADCRUMB: BreadcrumbsProps = {
	items: [{ title: 'баннеры' }],
};
export default function AdminBannersPage() {
	const searchParams = useSearchParams();
	const params = Object.fromEntries(searchParams.entries());

	const title = params.title ?? undefined;
	const isActive = params.isActive ? params.isActive === 'true' : undefined;

	const page = Number(params.page ?? 1);
	const limit = Number(params.limit ?? PAGE_SIZE_OPTIONS[0]);
	const sortBy = getEnumValue(EnumBannerSort, params.sortBy);
	const sort = getEnumValue(EnumParamsSort, params.sort);

	const { data, isFetching, refetch } = getAllBanners({
		title,
		isActive,
		page,
		limit,
		sort,
		sortBy,
	});

	return (
		<div className={classNames('root-admin-page', 'admin-container')}>
			<Breadcrumbs {...BREADCRUMB} />
			<AdminH1 title='баннеры' />
			<AdminToolbarBanner
				disabled={isFetching}
				formParams={{
					title,
					isActive,
				}}
			/>
			<AdminTableBanner
				data={data}
				isFetching={isFetching}
				page={page}
				limit={limit}
				sortBy={sortBy}
				sort={sort}
				refetch={refetch}
			/>
		</div>
	);
}
