'use client';

import { ButtonCustom } from '@/shared/ui/components/button';

import { IReviewsInstResponse } from '@/entities/reviews-inst';
import { AdminCreateEditFormContainer } from '@/shared/components/admin-create-edit-form-container';
import { AdminFormCreateAndRefreshInfo } from '@/shared/components/admin-form-create-and-refresh-info';
import { ReactNode } from 'react';
import { useCreateOrEditReviewInstAdmin } from '../model';
import { ActiveSortInfo, ImageInfo, MainInfo } from './components';

type Props = {
	data?: IReviewsInstResponse;
	actionDelete?: ReactNode;
	otherActions?: ReactNode;
};

export const AdminReviewsInstForm = ({
	data,
	actionDelete,
	otherActions,
}: Props) => {
	const { control, handleSubmit, onSubmit, isPending } =
		useCreateOrEditReviewInstAdmin({ data });

	return (
		<AdminCreateEditFormContainer
			handleSubmit={handleSubmit}
			onSubmit={onSubmit}
			isPending={isPending}
			idForm='reviewsInstForm'
			actionDelete={actionDelete}
			otherActions={otherActions}
			leftChildren={
				<>
					<MainInfo control={control} />
					<ActiveSortInfo control={control} />
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

					<ImageInfo control={control} />
				</>
			}
			actionSubmitForm={
				<ButtonCustom
					type='submit'
					size='s'
					disabled={isPending}
					isLoading={isPending}
					form='reviewsInstForm'
					mode='admin'
				>
					{data ? 'Обновить отзыв инсты' : 'Создать новый отзыв инсты'}
				</ButtonCustom>
			}
		/>
	);
};
