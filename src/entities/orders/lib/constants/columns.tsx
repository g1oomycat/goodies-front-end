import { getRouteAdminOrderEdit } from '@/shared/constants/router';
import { CloudBlock } from '@/shared/kit/cloud-block';
import { LinkCustom } from '@/shared/ui/components/link';
import { GridColDef } from '@mui/x-data-grid';
import { EnumOrderStatus } from '../../types';
import { orderStatusMeta } from './status-meta';

export const ordersColumns: GridColDef[] = [
	{
		field: 'id',
		headerName: 'ID',
		minWidth: 90,
		type: 'string',
		flex: 0.2,
		filterable: false,
		sortable: false,
	},
	{
		field: 'publicId',
		headerName: 'publicId',
		minWidth: 90,
		type: 'custom',
		flex: 0.2,
		filterable: false,
		sortable: false,
		renderCell: params => (
			<LinkCustom textDecoration href={getRouteAdminOrderEdit(params.row.id)}>
				{params.value}
			</LinkCustom>
		),
	},

	{
		field: 'fullName',
		headerName: 'ФИО',
		type: 'string',
		minWidth: 90,
		flex: 0.2,
		filterable: false,
		sortable: false,
	},
	{
		field: 'email',
		headerName: 'Почта',
		type: 'string',
		minWidth: 90,
		flex: 0.2,
		filterable: false,
	},
	{
		field: 'phone',
		headerName: 'Телефон',
		type: 'string',
		minWidth: 90,
		flex: 0.2,
		filterable: false,
	},
	{
		field: 'total',
		headerName: 'Стоимость',
		type: 'number',
		minWidth: 90,
		flex: 0.2,
		filterable: false,
	},
	{
		field: 'quantity',
		headerName: 'Количество',
		type: 'string',
		minWidth: 90,
		flex: 0.2,
		filterable: false,
		align: 'right',
		headerAlign: 'right',
	},
	{
		field: 'status',
		headerName: 'Статус',
		type: 'string',
		minWidth: 90,
		flex: 0.2,
		filterable: false,
		align: 'right',
		headerAlign: 'right',
		renderCell: params => {
			const { bgColor, label } =
				orderStatusMeta[params.value as EnumOrderStatus];
			return (
				<CloudBlock bgColor={bgColor} textColor='black'>
					{label}
				</CloudBlock>
			);
		},
	},
	{
		field: 'deliveryMethod',
		headerName: 'Доставка',
		type: 'string',
		minWidth: 90,
		flex: 0.2,
		filterable: false,
		align: 'right',
		headerAlign: 'right',
	},
	{
		field: 'paymentMethod',
		headerName: 'Оплата',
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
