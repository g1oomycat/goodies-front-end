import {
	IGetAllReviewsInstResponse,
	IReviewsInstSort,
	reviewsInstColumns,
	reviewsInstRows,
} from '@/entities/reviews-inst';
import { useAdminDeleteBulkReviewInst } from '@/features/admin-delete-bulk/admin-delete-bulk-review-inst';
import { useAdminGridData } from '@/features/admin-grid-data';
import { UniversalDataGrid } from '@/shared/kit/data-grid';
import { IParamsSort } from '@/shared/types/sort';

type Props = {
	data?: IGetAllReviewsInstResponse;
	isFetching: boolean;
	page: number;
	limit: number;
	sortBy?: IReviewsInstSort;
	sort?: IParamsSort;
	refetch?: () => void;
};

export const AdminTableReviewsInst = ({
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

	const { handleDeleteBulkReviewInst, isPending } =
		useAdminDeleteBulkReviewInst(refetch);

	return (
		<UniversalDataGrid
			columns={reviewsInstColumns}
			rows={reviewsInstRows(data?.result) ?? []}
			loading={isFetching || isPending}
			rowCount={data?.totalCount ?? 0}
			paginationModel={paginationModel}
			onPaginationModelChange={handleChangeQueryParams}
			sortModel={sortModel}
			onSortModelChange={handleChangeQueryParams}
			deleteData={handleDeleteBulkReviewInst}
		/>
	);
};
