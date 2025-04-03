import { IFilterUsers } from '@/entities/user';
import { AdminUsersFilter } from '@/features/admin-filters/admin-users-filters';
import { AdminToolbar } from '@/shared/components/admin-toolbar';
import { getRouteAdminUserCreate } from '@/shared/constants/router';
import { ButtonCustom } from '@/shared/ui/components/button';
type Props = {
	disabled: boolean;
	formParams?: IFilterUsers;
};

export const AdminToolbarUsers = ({ disabled, formParams }: Props) => {
	return (
		<AdminToolbar
			filterAction={
				<AdminUsersFilter disabled={disabled} formParams={formParams} />
			}
			otherActions={
				<ButtonCustom
					mode='admin'
					link={getRouteAdminUserCreate()}
					size='s'
					contain={true}
				>
					создать нового пользователя
				</ButtonCustom>
			}
		/>
	);
};
