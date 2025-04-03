import { IUsersResponse } from '@/entities/user';
import { AdminDeleteUserButton } from '@/features/admin-delete/admin-delete-user';
import { AdminUserForm } from '@/features/admin-forms/admin-user-form';
import { AdminLogOutOfAccountButton } from '@/features/log-out-of-account';
import { AdminFormCreateEditSkeleton } from '@/shared/components/admin-create-edit-form-container/skeleton';
import { useAuthStore } from '@/shared/config/auth-store';

type Props = {
	data?: IUsersResponse;
};

export const AdminEditFormUser = ({ data }: Props) => {
	const { data: authUser } = useAuthStore();
	return (
		<>
			{!data ? (
				<AdminFormCreateEditSkeleton />
			) : (
				<AdminUserForm
					data={data}
					actionDelete={<AdminDeleteUserButton id={data.id} />}
					otherActions={
						authUser?.id === data.id ? <AdminLogOutOfAccountButton /> : <></>
					}
				/>
			)}
		</>
	);
};
