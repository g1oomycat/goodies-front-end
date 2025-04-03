import { getRouteAdminProductEdit } from '@/shared/constants/router';
import { ImageDataGrid } from '@/shared/kit/data-grid/image';
import { LinkCustom } from '@/shared/ui/components/link';
import { GridColDef } from '@mui/x-data-grid';

export const productsColumns: GridColDef[] = [
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
		flex: 1,
		type: 'custom',
		filterable: false,
		renderCell: params => (
			<LinkCustom href={getRouteAdminProductEdit(params.row.id)} textDecoration>
				{params.value}
			</LinkCustom>
		),
	},
	{
		field: 'category',
		headerName: 'Категория',
		type: 'string',
		minWidth: 90,
		flex: 1,
		filterable: false,
		sortable: false,
	},
	{
		field: 'stock',
		headerName: 'Остатки',
		type: 'number',
		minWidth: 90,
		flex: 0.2,
		filterable: false,
	},
	{
		field: 'price',
		headerName: 'Цена',
		type: 'string',
		minWidth: 90,
		flex: 0.2,
		filterable: false,
		align: 'right',
		headerAlign: 'right',
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
