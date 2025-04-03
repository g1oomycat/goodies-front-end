import {
	IGetAllUsersResponse,
	ISortUsers,
	usersColumns,
	usersRows,
} from '@/entities/user';
import { useAdminDeleteBulkUser } from '@/features/admin-delete-bulk';
import { useAdminGridData } from '@/features/admin-grid-data';
import { UniversalDataGrid } from '@/shared/kit/data-grid';
import { IParamsSort } from '@/shared/types/sort';

type Props = {
	data?: IGetAllUsersResponse;
	isFetching: boolean;
	page: number;
	limit: number;
	sortBy?: ISortUsers;
	sort?: IParamsSort;
};

export const AdminTableUsers = ({
	data,
	isFetching,
	limit,
	page,
	sort,
	sortBy,
}: Props) => {
	const { paginationModel, sortModel, handleChangeQueryParams } =
		useAdminGridData({ limit, page, sort, sortBy });
	const { handleDeleteBulkUser, isPending } = useAdminDeleteBulkUser();
	return (
		<UniversalDataGrid
			columns={usersColumns}
			rows={usersRows(data?.result) ?? []}
			loading={isFetching || isPending}
			rowCount={data?.totalCount ?? 0}
			paginationModel={paginationModel}
			onPaginationModelChange={handleChangeQueryParams}
			sortModel={sortModel}
			onSortModelChange={handleChangeQueryParams}
			deleteData={handleDeleteBulkUser}
		/>
	);
};
