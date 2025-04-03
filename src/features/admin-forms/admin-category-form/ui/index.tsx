'use client';

import { ButtonCustom } from '@/shared/ui/components/button';

import { ICategoriesResponse } from '@/entities/category';
import { AdminCreateEditFormContainer } from '@/shared/components/admin-create-edit-form-container';
import { AdminFormCreateAndRefreshInfo } from '@/shared/components/admin-form-create-and-refresh-info';
import { ReactNode } from 'react';
import { useCreateOrEditCategoryAdmin } from '../model';

import {
	CategoryAttributesContainerForm,
	Image,
	MainInfo,
	SortInfo,
} from './components';

type Props = {
	data?: ICategoriesResponse;
	actionDelete?: ReactNode;
	otherActions?: ReactNode;
};

export const AdminCategoryForm = ({
	data,
	actionDelete,
	otherActions,
}: Props) => {
	const { control, handleSubmit, onSubmit, isPending, setValue } =
		useCreateOrEditCategoryAdmin({ data });

	return (
		<AdminCreateEditFormContainer
			handleSubmit={handleSubmit}
			onSubmit={onSubmit}
			isPending={isPending}
			idForm='categoryForm'
			actionDelete={actionDelete}
			otherActions={otherActions}
			leftChildren={
				<>
					<MainInfo control={control} />
					<SortInfo control={control} />

					<CategoryAttributesContainerForm
						control={control}
						setValue={setValue}
					/>
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

					<Image control={control} />
				</>
			}
			actionSubmitForm={
				<ButtonCustom
					mode='admin'
					type='submit'
					size='s'
					disabled={isPending}
					isLoading={isPending}
					form={'categoryForm'}
				>
					{data ? 'Обновить категорию' : 'Создать новый категорию'}
				</ButtonCustom>
			}
		/>
	);
};
