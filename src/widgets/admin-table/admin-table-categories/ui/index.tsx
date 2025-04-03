import {
	categoriesColumns,
	categoriesRows,
	IGetAllCategoriesResponse,
} from '@/entities/category';
import { ICategoriesSort } from '@/entities/category/types/params';
import { useAdminDeleteBulkCategory } from '@/features/admin-delete-bulk/admin-delete-bulk-category';
import { useAdminGridData } from '@/features/admin-grid-data';
import { UniversalDataGrid } from '@/shared/kit/data-grid';
import { IParamsSort } from '@/shared/types/sort';

type Props = {
	data?: IGetAllCategoriesResponse;
	isFetching: boolean;
	page: number;
	limit: number;
	sortBy?: ICategoriesSort;
	sort?: IParamsSort;
};

export const AdminTableCategories = ({
	data,
	isFetching,
	limit,
	page,
	sort,
	sortBy,
}: Props) => {
	const { paginationModel, sortModel, handleChangeQueryParams } =
		useAdminGridData({ limit, page, sort, sortBy });
	const { handleDeleteBulkCategory, isPending } = useAdminDeleteBulkCategory();

	return (
		<UniversalDataGrid
			columns={categoriesColumns}
			rows={categoriesRows(data?.result) ?? []}
			loading={isFetching || isPending}
			rowCount={data?.totalCount ?? 0}
			paginationModel={paginationModel}
			onPaginationModelChange={handleChangeQueryParams}
			sortModel={sortModel}
			onSortModelChange={handleChangeQueryParams}
			deleteData={handleDeleteBulkCategory}
		/>
	);
};
