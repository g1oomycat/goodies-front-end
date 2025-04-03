'use client';

import { IProductsResponse } from '@/entities/product';
import { ButtonCustom } from '@/shared/ui/components/button';

import { AdminCreateEditFormContainer } from '@/shared/components/admin-create-edit-form-container';
import { AdminFormCreateAndRefreshInfo } from '@/shared/components/admin-form-create-and-refresh-info';
import { ReactNode } from 'react';
import { useCreateOrEditProductAdmin } from '../model';
import {
	CategoryInfo,
	Images,
	MainInfo,
	PaymentInfo,
	ProductAttributesForm,
	StatsInfo,
} from './components';

type Props = {
	data?: IProductsResponse;
	actionDelete?: ReactNode;
	otherActions?: ReactNode;
};

export const AdminProductForm = ({
	data,
	actionDelete,
	otherActions,
}: Props) => {
	const {
		categoryOptions,
		selectedCategory,
		control,
		handleSubmit,
		onSubmit,
		isPending,
	} = useCreateOrEditProductAdmin({ data });

	return (
		<AdminCreateEditFormContainer
			handleSubmit={handleSubmit}
			onSubmit={onSubmit}
			isPending={isPending}
			idForm='productForm'
			actionDelete={actionDelete}
			otherActions={otherActions}
			leftChildren={
				<>
					<MainInfo control={control} />
					{/* Блок статистики — только при редактировании */}
					{!!data && <StatsInfo data={data} control={control} />}
					<PaymentInfo control={control} data={data} />
					<CategoryInfo control={control} categoryOptions={categoryOptions} />
					<ProductAttributesForm
						control={control}
						selectedCategory={selectedCategory}
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

					<Images control={control} />
				</>
			}
			actionSubmitForm={
				<ButtonCustom
					type='submit'
					size='s'
					disabled={isPending}
					isLoading={isPending}
					form={'productForm'}
					mode='admin'
				>
					{data ? 'Обновить товар' : 'Создать новый товар'}
				</ButtonCustom>
			}
		/>
	);
};
