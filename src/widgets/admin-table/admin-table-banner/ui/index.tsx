import {
	IBannerSort,
	IGetAllBannerResponse,
	bannerColumns,
	bannerRows,
} from '@/entities/banner';
import { useAdminDeleteBulkBanner } from '@/features/admin-delete-bulk';

import { useAdminGridData } from '@/features/admin-grid-data';
import { UniversalDataGrid } from '@/shared/kit/data-grid';
import { IParamsSort } from '@/shared/types/sort';

type Props = {
	data?: IGetAllBannerResponse;
	isFetching: boolean;
	page: number;
	limit: number;
	sortBy?: IBannerSort;
	sort?: IParamsSort;
	refetch?: () => void;
};

export default ({
	data,
	isFetching,
	limit,
	page,
	sort,
	sortBy,
	refetch,
}: Props) => {
	const { paginationModel, sortModel, handleChangeQueryParams } =
		useAdminGridData({ limit, page, sort, sortBy });

	const { handleDeleteBulkBanner, isPending } =
		useAdminDeleteBulkBanner(refetch);

	return (
		<UniversalDataGrid
			columns={bannerColumns}
			rows={bannerRows(data?.result) ?? []}
			loading={isFetching || isPending}
			rowCount={data?.totalCount ?? 0}
			paginationModel={paginationModel}
			onPaginationModelChange={handleChangeQueryParams}
			sortModel={sortModel}
			onSortModelChange={handleChangeQueryParams}
			deleteData={handleDeleteBulkBanner}
		/>
	);
};
