'use client';

import { useQuery } from '@/shared/hooks/useQuery';
import { PAGE_SIZE_OPTIONS } from '@/shared/kit/data-grid/page-size-option';
import { IParamsSort } from '@/shared/types/sort';
import { GridPaginationModel, GridSortModel } from '@mui/x-data-grid';
import { useCallback } from 'react';
type Props = {
	page?: number;
	limit?: number;
	sortBy?: string;
	sort?: IParamsSort;
};
export function useAdminGridData({ limit, page, sort, sortBy }: Props) {
	const { createQuery } = useQuery();
	const paginationModel: GridPaginationModel = {
		page: page ? page - 1 : 0,
		pageSize: limit ? limit : PAGE_SIZE_OPTIONS[0],
	};

	const sortModel: GridSortModel = [{ field: sortBy ?? '', sort }];

	// Коллбэк для изменения параметров в URL
	const handleChangeQueryParams = useCallback(
		(option: Record<string, string | number>) => {
			createQuery({ paramsToUpdate: option });
		},
		[createQuery]
	);

	return {
		paginationModel,
		sortModel,
		handleChangeQueryParams,
	};
}
