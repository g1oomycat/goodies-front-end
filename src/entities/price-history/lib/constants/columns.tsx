import { getRouteAdminProductEdit } from '@/shared/constants/router';
import { CloudBlock } from '@/shared/kit/cloud-block';
import { ImageDataGrid } from '@/shared/kit/data-grid/image';
import { LinkCustom } from '@/shared/ui/components/link';
import { GridColDef } from '@mui/x-data-grid';

export const priceHistoryColumns: GridColDef[] = [
	{
		field: 'id',
		headerName: 'ID',
		minWidth: 90,
		flex: 0.2,
		filterable: false,
		sortable: false,
	},
	{
		field: 'productId',
		headerName: 'productId',
		minWidth: 30,
		flex: 0.1,
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
				href={getRouteAdminProductEdit(params.row.productId)}
				textDecoration
			>
				{params.value}
			</LinkCustom>
		),
	},

	{
		field: 'newPrice',
		headerName: 'Новая стоимость',
		type: 'string',
		minWidth: 90,
		flex: 0.2,
		filterable: false,
		align: 'right',
		headerAlign: 'right',
	},
	{
		field: 'oldPrice',
		headerName: 'Старая стоимость',
		type: 'string',
		minWidth: 90,
		flex: 0.2,
		filterable: false,
		align: 'right',
		headerAlign: 'right',
	},
	{
		field: 'percentageChange',
		headerName: 'Процент изменения',
		type: 'string',
		minWidth: 90,
		flex: 0.2,
		filterable: false,
		renderCell: params => {
			const bgColor = params.value.includes('-') ? '#F4A6A6' : '#A8D5BA';
			return (
				<CloudBlock bgColor={bgColor} textColor='black'>
					{params.value}
				</CloudBlock>
			);
		},
		align: 'right',
		headerAlign: 'right',
	},

	{
		field: 'createdAt',
		headerName: 'Дата изменения',
		type: 'string',
		minWidth: 90,
		flex: 0.4,
		filterable: false,
		align: 'right',
		headerAlign: 'right',
	},
];
