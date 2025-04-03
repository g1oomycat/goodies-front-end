'use client';

import { EnumReviewsInstSort } from '@/entities/reviews-inst';
import { getAllReviewsInst } from '@/entities/reviews-inst/model/public/get-all';
import { AdminH1 } from '@/shared/kit/admin-h1';
import { Breadcrumbs, BreadcrumbsProps } from '@/shared/kit/breadcrumbs';
import { PAGE_SIZE_OPTIONS } from '@/shared/kit/data-grid/page-size-option';
import { getEnumValue } from '@/shared/lib/get-enum-value';
import { EnumParamsSort } from '@/shared/types/sort';
import { AdminTableReviewsInst } from '@/widgets/admin-table/admin-table-reviews-inst';
import { AdminToolbarReviewsInst } from '@/widgets/admin-toolbar/admin-toolbar-reviews-inst/ui';
import classNames from 'classnames';
import { useSearchParams } from 'next/navigation';

const BREADCRUMB: BreadcrumbsProps = {
	items: [{ title: 'отзывы инсты' }],
};

export default function AdminReviewsInstPage() {
	const searchParams = useSearchParams();
	const params = Object.fromEntries(searchParams.entries());

	const name = params.name ?? undefined;
	const nick = params.nick ?? undefined;
	const isActive = params.isActive ? params.isActive === 'true' : undefined;

	const page = Number(params.page ?? 1);
	const limit = Number(params.limit ?? PAGE_SIZE_OPTIONS[0]);
	const sortBy = getEnumValue(EnumReviewsInstSort, params.sortBy);
	const sort = getEnumValue(EnumParamsSort, params.sort);

	const { data, isFetching, refetch } = getAllReviewsInst({
		isActive,
		name,
		nick,
		page,
		limit,
		sort,
		sortBy,
	});

	return (
		<div className={classNames('root-admin-page admin-container')}>
			<Breadcrumbs {...BREADCRUMB} />
			<AdminH1 title='отзывы инсты' />
			<AdminToolbarReviewsInst
				disabled={isFetching}
				formParams={{
					isActive,
					name,
					nick,
				}}
			/>
			<AdminTableReviewsInst
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
