import {
	IGetAllPriceHistoryResponse,
	IPriceHistorySort,
	priceHistoryColumns,
	priceHistoryRows,
} from '@/entities/price-history';

import { useAdminGridData } from '@/features/admin-grid-data';
import { UniversalDataGrid } from '@/shared/kit/data-grid';
import { IParamsSort } from '@/shared/types/sort';

type Props = {
	data?: IGetAllPriceHistoryResponse;
	isFetching: boolean;
	page: number;
	limit: number;
	sortBy?: IPriceHistorySort;
	sort?: IParamsSort;
};

export const AdminTablePriceHistory = ({
	data,
	isFetching,
	limit,
	page,
	sort,
	sortBy,
}: Props) => {
	const { paginationModel, sortModel, handleChangeQueryParams } =
		useAdminGridData({ limit, page, sort, sortBy });

	return (
		<UniversalDataGrid
			columns={priceHistoryColumns}
			rows={priceHistoryRows(data?.result) ?? []}
			loading={isFetching}
			rowCount={data?.totalCount ?? 0}
			paginationModel={paginationModel}
			onPaginationModelChange={handleChangeQueryParams}
			sortModel={sortModel}
			onSortModelChange={handleChangeQueryParams}
		/>
	);
};
