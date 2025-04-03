import { getRouteAdminCategoryEdit } from '@/shared/constants/router';
import { ImageDataGrid } from '@/shared/kit/data-grid/image';
import { LinkCustom } from '@/shared/ui/components/link';
import { GridColDef } from '@mui/x-data-grid';

export const categoriesColumns: GridColDef[] = [
	{
		field: 'id',
		headerName: 'ID',
		minWidth: 90,
		flex: 0.2,
		filterable: false,
		sortable: false,
	},
	{
		field: 'image',
		headerName: 'Фотография',
		minWidth: 90,
		flex: 0.3,
		type: 'custom',
		filterable: false,
		sortable: false,
		align: 'center',
		headerAlign: 'center',
		disableExport: true,
		renderCell: params => (
			<ImageDataGrid alt={params.row.name} url={params.value} />
		),
	},
	{
		field: 'name',
		headerName: 'Название',
		minWidth: 90,
		flex: 0.8,
		type: 'custom',
		filterable: false,
		renderCell: params => (
			<LinkCustom
				textDecoration
				href={getRouteAdminCategoryEdit(params.row.id)}
			>
				{params.value}
			</LinkCustom>
		),
	},

	{
		field: 'countProduct',
		headerName: 'Количество товаров',
		type: 'number',
		minWidth: 90,
		flex: 0.3,
		filterable: false,
	},

	{
		field: 'numberSort',
		headerName: 'Сортировка',
		type: 'number',
		minWidth: 90,
		flex: 0.2,
		filterable: false,
	},

	{
		field: 'updatedAt',
		headerName: 'Дата изменения',
		type: 'string',
		minWidth: 90,
		flex: 0.4,
		filterable: false,
		align: 'right',
		headerAlign: 'right',
	},
];
