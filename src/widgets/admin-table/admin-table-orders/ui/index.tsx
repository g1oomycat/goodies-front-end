import {
	IGetAllOrdersResponse,
	IOrdersSort,
	ordersColumns,
	ordersRows,
} from '@/entities/orders';
import { useAdminGridData } from '@/features/admin-grid-data';
import { UniversalDataGrid } from '@/shared/kit/data-grid';
import { IParamsSort } from '@/shared/types/sort';

type Props = {
	data?: IGetAllOrdersResponse;
	isFetching: boolean;
	page: number;
	limit: number;
	sortBy?: IOrdersSort;
	sort?: IParamsSort;
};

export const AdminTableOrders = ({
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
			columns={ordersColumns}
			rows={ordersRows(data?.result) ?? []}
			loading={isFetching}
			rowCount={data?.totalCount ?? 0}
			paginationModel={paginationModel}
			onPaginationModelChange={handleChangeQueryParams}
			sortModel={sortModel}
			onSortModelChange={handleChangeQueryParams}
		/>
	);
};
