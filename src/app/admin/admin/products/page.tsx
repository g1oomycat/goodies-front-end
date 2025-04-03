'use client';

import { EnumProductSort, getAllProducts } from '@/entities/product';
import { AdminH1 } from '@/shared/kit/admin-h1';
import { Breadcrumbs, BreadcrumbsProps } from '@/shared/kit/breadcrumbs';

import { PAGE_SIZE_OPTIONS } from '@/shared/kit/data-grid/page-size-option';
import { getEnumValue } from '@/shared/lib/get-enum-value';
import { EnumParamsSort } from '@/shared/types/sort';
import { AdminTableProducts } from '@/widgets/admin-table';
import { AdminToolbarProduct } from '@/widgets/admin-toolbar';

import classNames from 'classnames';
import { useSearchParams } from 'next/navigation';

const BREADCRUMB: BreadcrumbsProps = {
	items: [{ title: 'товары' }],
};
export default function AdminProductsPage() {
	const searchParams = useSearchParams();
	const params = Object.fromEntries(searchParams.entries());

	const name = params.name ?? undefined;
	const categoryId = params.categoryId ?? undefined;
	const isLowStock = params.isLowStock === 'true';
	const page = Number(params.page ?? 1);
	const limit = Number(params.limit ?? PAGE_SIZE_OPTIONS[0]);

	const sortBy = getEnumValue(EnumProductSort, params.sortBy);

	const sort = getEnumValue(EnumParamsSort, params.sort);
	const { data, isFetching, refetch } = getAllProducts({
		page,
		limit,
		sort,
		sortBy,
		isLowStock,
		categoryId,
		name,
	});

	return (
		<div className={classNames('root-admin-page', 'admin-container')}>
			<Breadcrumbs {...BREADCRUMB} />
			<AdminH1 title='товары' />
			<AdminToolbarProduct
				disabled={isFetching}
				formParams={{ categoryId, isLowStock, name }}
			/>
			<AdminTableProducts
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
