import { getRouteAdminReviewInstagramEdit } from '@/shared/constants/router';
import { ImageDataGrid } from '@/shared/kit/data-grid/image';
import { LinkCustom } from '@/shared/ui/components/link';
import { GridColDef } from '@mui/x-data-grid';
import Link from 'next/link';

export const reviewsInstColumns: GridColDef[] = [
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
		headerName: 'Имя',
		minWidth: 90,
		flex: 0.3,
		type: 'custom',
		filterable: false,
		renderCell: params => (
			<LinkCustom
				href={getRouteAdminReviewInstagramEdit(params.row.id)}
				textDecoration
			>
				{params.value}
			</LinkCustom>
		),
	},
	{
		field: 'nick',
		headerName: 'Никнейм',
		minWidth: 90,
		flex: 0.3,
		type: 'custom',
		filterable: false,
		renderCell: params => (
			<Link
				href={getRouteAdminReviewInstagramEdit(params.row.id)}
				className='link-text '
			>
				{params.value}
			</Link>
		),
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
		field: 'position',
		headerName: 'Сортировка',
		type: 'number',
		minWidth: 90,
		flex: 0.2,
		filterable: false,
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
