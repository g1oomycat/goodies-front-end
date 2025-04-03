'use client';

import { ButtonCustom } from '@/shared/ui/components/button';

import { IBannerResponse } from '@/entities/banner';
import { AdminCreateEditFormContainer } from '@/shared/components/admin-create-edit-form-container';
import { AdminFormCreateAndRefreshInfo } from '@/shared/components/admin-form-create-and-refresh-info';
import { ReactNode } from 'react';
import { useCreateOrEditBannerAdmin } from '../model';
import {
	ActiveSortInfo,
	AdditionalInfo,
	AppearanceInfo,
	Images,
	MainInfo,
} from './components';

type Props = {
	data?: IBannerResponse;
	actionDelete?: ReactNode;
	otherActions?: ReactNode;
};

export const AdminBannerForm = ({
	data,
	actionDelete,
	otherActions,
}: Props) => {
	const { control, handleSubmit, onSubmit, isPending } =
		useCreateOrEditBannerAdmin({ data });

	return (
		<AdminCreateEditFormContainer
			handleSubmit={handleSubmit}
			onSubmit={onSubmit}
			isPending={isPending}
			idForm='bannerForm'
			actionDelete={actionDelete}
			otherActions={otherActions}
			leftChildren={
				<>
					<MainInfo control={control} />
					<AdditionalInfo control={control} />
					<ActiveSortInfo control={control} />
					<AppearanceInfo control={control} />
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
					mode='admin'
					form={'bannerForm'}
				>
					{data ? 'Обновить баннер' : 'Создать новый баннер'}
				</ButtonCustom>
			}
		/>
	);
};
