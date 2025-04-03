'use client';

import { ButtonCustom } from '@/shared/ui/components/button';

import { IUsersResponse } from '@/entities/user';
import { AdminCreateEditFormContainer } from '@/shared/components/admin-create-edit-form-container';
import { useAuthStore } from '@/shared/config/auth-store';
import { ReactNode } from 'react';

import { AdminFormCreateAndRefreshInfo } from '@/shared/components/admin-form-create-and-refresh-info';
import { useCreateOrEditUserAdmin } from '../model';
import { ContactInfo, FullNameInfo, MainInfo } from './components';

type Props = {
	data?: IUsersResponse;
	actionDelete?: ReactNode;
	otherActions?: ReactNode;
};

export const AdminUserForm = ({ data, actionDelete, otherActions }: Props) => {
	const { role } = useAuthStore();
	const { control, handleSubmit, onSubmit, isPending } =
		useCreateOrEditUserAdmin({ data });

	return (
		<AdminCreateEditFormContainer
			handleSubmit={handleSubmit}
			onSubmit={onSubmit}
			isPending={isPending}
			idForm='userForm'
			actionDelete={actionDelete}
			otherActions={otherActions}
			leftChildren={
				<>
					<MainInfo control={control} data={data} role={role} />
					<ContactInfo control={control} />
					<FullNameInfo control={control} />
				</>
			}
			rightChildren={
				<>
					{/* Блок информации о товаре — только при редактировании */}
					{data && (
						<AdminFormCreateAndRefreshInfo
							createdAt={data.createdAt}
							updatedAt={data.updatedAt}
						/>
					)}
				</>
			}
			actionSubmitForm={
				<ButtonCustom
					mode='admin'
					type='submit'
					size='s'
					disabled={isPending}
					isLoading={isPending}
					form={'userForm'}
				>
					{data ? 'Обновить пользователя' : 'Создать нового пользователя'}
				</ButtonCustom>
			}
		/>
	);
};
