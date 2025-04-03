'use client';
import {
	DataGrid,
	GridColDef,
	GridFooterContainer,
	GridPagination,
	GridPaginationModel,
	GridRowSelectionModel,
	GridSortModel,
} from '@mui/x-data-grid';
import { useState } from 'react';
import { sxStyleDataGrid } from '../../ui/styles/mui/sx-data-grid';
import { CustomFooter } from './custom-footer';
import { PAGE_SIZE_OPTIONS } from './page-size-option';

export interface UniversalDataGridProps {
	rows: any[];
	columns: GridColDef[];
	paginationModel: GridPaginationModel;
	sortModel: GridSortModel;

	checkboxSelection?: boolean;
	loading?: boolean;
	rowCount?: number;
	onPaginationModelChange: (option: { page: number; limit: number }) => void;
	onSortModelChange: (option: { sortBy: string; sort: string }) => void;
	deleteData?: (ids: string[]) => void;
	// Дополнительные пропсы, если нужны
}

export function UniversalDataGrid({
	rows,
	columns,
	paginationModel,
	sortModel,
	loading,
	rowCount,
	onPaginationModelChange,
	onSortModelChange,
	deleteData,
	checkboxSelection = true,
	...rest
}: UniversalDataGridProps) {
	const [selectedRows, setSelectedRows] = useState<GridRowSelectionModel>([]);

	function handleDelete() {
		deleteData?.(selectedRows as string[]);
	}
	return (
		<section
			style={{
				maxHeight: '90vh',
				display: 'flex',
				flexDirection: 'column',
			}}
		>
			<DataGrid
				rows={rows}
				columns={columns}
				paginationMode='server'
				sortingMode='server'
				pageSizeOptions={PAGE_SIZE_OPTIONS}
				loading={loading}
				paginationModel={paginationModel}
				sortModel={sortModel}
				rowCount={rowCount}
				onPaginationModelChange={model =>
					onPaginationModelChange({
						page: model.page + 1,
						limit: model.pageSize,
					})
				}
				onSortModelChange={model =>
					onSortModelChange({
						sortBy: model[0]?.field ?? '',
						sort: model[0]?.sort ?? '',
					})
				}
				initialState={{
					columns: {
						columnVisibilityModel: {
							id: false, // Скрываем колонку `id` при загрузке
						},
					},
				}}
				getRowHeight={() => 'auto'}
				checkboxSelection={checkboxSelection}
				sx={sxStyleDataGrid}
				slotProps={{
					loadingOverlay: {
						variant: 'linear-progress',
						noRowsVariant: 'skeleton',
					},
				}}
				onRowSelectionModelChange={newSelection =>
					setSelectedRows(newSelection)
				}
				slots={{
					// toolbar: CustomToolbar,
					footer: () =>
						deleteData ? (
							<CustomFooter
								selectedRows={selectedRows}
								isLoading={loading}
								disabled={loading}
								onDelete={() => handleDelete()}
							/>
						) : (
							<GridFooterContainer>
								<GridPagination />
							</GridFooterContainer>
						),
				}}
				{...rest}
			/>
		</section>
	);
}
