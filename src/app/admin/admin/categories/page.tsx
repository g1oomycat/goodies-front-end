'use client';

import { getAllCategories } from '@/entities/category/model/public/get-all';
import { EnumCategoriesSort } from '@/entities/category/types/params';
import { AdminH1 } from '@/shared/kit/admin-h1';
import { Breadcrumbs, BreadcrumbsProps } from '@/shared/kit/breadcrumbs';
import { PAGE_SIZE_OPTIONS } from '@/shared/kit/data-grid/page-size-option';
import { getEnumValue } from '@/shared/lib/get-enum-value';
import { EnumParamsSort } from '@/shared/types/sort';
import { AdminTableCategories } from '@/widgets/admin-table/admin-table-categories';
import { AdminToolbarCategories } from '@/widgets/admin-toolbar/admin-toolbar-categories';

import classNames from 'classnames';
import { useSearchParams } from 'next/navigation';
const BREADCRUMB: BreadcrumbsProps = {
	items: [{ title: 'баннеры' }],
};
export default function AdminCategoriesPage() {
	const searchParams = useSearchParams();
	const params = Object.fromEntries(searchParams.entries());

	const name = params.name ?? undefined;
	const page = Number(params.page ?? 1);
	const limit = Number(params.limit ?? PAGE_SIZE_OPTIONS[0]);

	const sortBy = getEnumValue(EnumCategoriesSort, params.sortBy);

	const sort = getEnumValue(EnumParamsSort, params.sort);
	const { data, isFetching } = getAllCategories({
		page,
		limit,
		sort,
		sortBy,
		name,
	});

	return (
		<div className={classNames('root-admin-page', 'admin-container')}>
			<Breadcrumbs {...BREADCRUMB} />
			<AdminH1 title='категории' />
			<AdminToolbarCategories disabled={isFetching} formParams={{ name }} />
			<AdminTableCategories
				data={data}
				isFetching={isFetching}
				page={page}
				limit={limit}
				sortBy={sortBy}
				sort={sort}
			/>
		</div>
	);
}
