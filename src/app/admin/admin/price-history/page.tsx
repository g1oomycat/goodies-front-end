'use client';

import {
	EnumPriceHistorySort,
	getAllPriceHistory,
} from '@/entities/price-history';
import { AdminH1 } from '@/shared/kit/admin-h1';
import { Breadcrumbs, BreadcrumbsProps } from '@/shared/kit/breadcrumbs';

import { PAGE_SIZE_OPTIONS } from '@/shared/kit/data-grid/page-size-option';
import { getEnumValue } from '@/shared/lib/get-enum-value';
import { EnumParamsSort } from '@/shared/types/sort';
import { AdminTablePriceHistory } from '@/widgets/admin-table/admin-table-price-history';
import { AdminToolbarPriceHistory } from '@/widgets/admin-toolbar/admin-toolbar-price-history';

import classNames from 'classnames';
import { useSearchParams } from 'next/navigation';

const BREADCRUMB: BreadcrumbsProps = {
	items: [{ title: 'история изменения цен' }],
};
export default function AdminPriceHistoryPage() {
	const searchParams = useSearchParams();
	const params = Object.fromEntries(searchParams.entries());

	const productId = params.productId ?? undefined;
	const name = params.name ?? undefined;
	const page = Number(params.page ?? 1);
	const limit = Number(params.limit ?? PAGE_SIZE_OPTIONS[0]);

	const sortBy = getEnumValue(EnumPriceHistorySort, params.sortBy);

	const sort = getEnumValue(EnumParamsSort, params.sort);

	const { data, isFetching } = getAllPriceHistory({
		productId,
		page,
		limit,
		sort,
		sortBy,
		name,
	});

	return (
		<div className={classNames('root-admin-page', 'admin-container')}>
			<Breadcrumbs {...BREADCRUMB} />
			<AdminH1 title='история изменения цен' />
			<AdminToolbarPriceHistory disabled={isFetching} formParams={{ name }} />
			<AdminTablePriceHistory
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
