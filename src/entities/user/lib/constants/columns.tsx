import { getRouteAdminUserEdit } from '@/shared/constants/router';
import { CloudBlock } from '@/shared/kit/cloud-block';
import { LinkCustom } from '@/shared/ui/components/link';
import { GridColDef } from '@mui/x-data-grid';
import { EnumUserRole } from '../../types';
import { UserRoleMeta } from './role-meta';

export const usersColumns: GridColDef[] = [
	{
		field: 'id',
		headerName: 'ID',
		minWidth: 90,
		flex: 0.2,
		filterable: false,
		sortable: false,
	},

	{
		field: 'fullName',
		headerName: 'Имя',
		minWidth: 90,
		flex: 1,
		type: 'custom',
		filterable: false,
		sortable: false,
		renderCell: params => (
			<LinkCustom href={getRouteAdminUserEdit(params.row.id)} textDecoration>
				{params.value}
			</LinkCustom>
		),
	},
	{
		field: 'email',
		headerName: 'Почта',
		type: 'string',
		minWidth: 90,
		flex: 0.4,
		filterable: false,
	},
	{
		field: 'phone',
		headerName: 'Телефон',
		type: 'string',
		minWidth: 90,
		flex: 0.4,
		filterable: false,
	},
	{
		field: 'role',
		headerName: 'Роль',
		type: 'string',
		minWidth: 90,
		flex: 0.4,
		filterable: false,
		renderCell: params => {
			const role = params.value as EnumUserRole;
			const { label, color } = UserRoleMeta[role] || {
				label: 'Неизвестно',
				color: 'gray',
			};
			return (
				<CloudBlock bgColor={color} textColor={'black'}>
					{label}
				</CloudBlock>
			);
		},
	},

	{
		field: 'createdAt',
		headerName: 'Дата регистрации',
		type: 'string',
		minWidth: 90,
		flex: 0.4,
		filterable: false,
		align: 'right',
		headerAlign: 'right',
	},
];
