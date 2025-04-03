import {
	IGetAllProductsResponse,
	IProductSort,
	productsColumns,
	productsRows,
} from '@/entities/product';
import { useAdminDeleteBulkProduct } from '@/features/admin-delete-bulk';
import { useAdminGridData } from '@/features/admin-grid-data';
import { UniversalDataGrid } from '@/shared/kit/data-grid';
import { IParamsSort } from '@/shared/types/sort';

type Props = {
	data?: IGetAllProductsResponse;
	isFetching: boolean;
	page: number;
	limit: number;
	sortBy?: IProductSort;
	sort?: IParamsSort;
	refetch?: () => void;
};

export const AdminTableProducts = ({
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

	const { handleDeleteBulkProduct, isPending } =
		useAdminDeleteBulkProduct(refetch);

	return (
		<UniversalDataGrid
			columns={productsColumns}
			rows={productsRows(data?.result) ?? []}
			loading={isFetching || isPending}
			rowCount={data?.totalCount ?? 0}
			paginationModel={paginationModel}
			onPaginationModelChange={handleChangeQueryParams}
			sortModel={sortModel}
			onSortModelChange={handleChangeQueryParams}
			deleteData={handleDeleteBulkProduct}
		/>
	);
};
