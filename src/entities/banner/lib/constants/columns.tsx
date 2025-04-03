import { getRouteAdminBannerEdit } from '@/shared/constants/router';
import { ImageDataGrid } from '@/shared/kit/data-grid/image';
import { LinkCustom } from '@/shared/ui/components/link';
import { GridColDef } from '@mui/x-data-grid';

export const bannerColumns: GridColDef[] = [
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
			<ImageDataGrid alt={params.row.title} url={params.value} />
		),
	},
	{
		field: 'title',
		headerName: 'Название',
		minWidth: 90,
		flex: 0.3,
		type: 'custom',
		filterable: false,
		renderCell: params => (
			<LinkCustom href={getRouteAdminBannerEdit(params.row.id)} textDecoration>
				{params.value}
			</LinkCustom>
		),
	},

	{
		field: 'position',
		headerName: 'Сортировка',
		type: 'number',
		minWidth: 90,
		flex: 0.2,
		filterable: false,
	},
	{
		field: 'isActive',
		headerName: 'Активность',
		type: 'boolean',
		minWidth: 90,
		flex: 0.2,
		filterable: false,
		sortable: false,
	},
	{
		field: 'startDate',
		headerName: 'Начало активности',
		type: 'string',
		minWidth: 90,
		flex: 0.2,
		filterable: false,
		align: 'right',
		headerAlign: 'right',
	},
	{
		field: 'endDate',
		headerName: 'Конец активности',
		type: 'string',
		minWidth: 90,
		flex: 0.2,
		filterable: false,
		align: 'right',
		headerAlign: 'right',
	},
	{
		field: 'createdAt',
		headerName: 'Дата создания',
		type: 'string',
		minWidth: 90,
		flex: 0.2,
		filterable: false,
		align: 'right',
		headerAlign: 'right',
	},
];
