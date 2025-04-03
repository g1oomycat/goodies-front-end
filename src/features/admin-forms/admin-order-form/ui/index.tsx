'use client';

import { AdminRightFormCreateEditItem } from '@/shared/components/admin-right-form-create-edit-item';

import { IOrdersResponse } from '@/entities/orders';
import { AdminCreateEditFormContainer } from '@/shared/components/admin-create-edit-form-container';
import { ReactNode } from 'react';

import { OrderHistoryStatus } from '@/entities/orders/ui/history-status';
import { AdminFormCreateAndRefreshInfo } from '@/shared/components/admin-form-create-and-refresh-info';
import { ButtonCustom } from '@/shared/ui/components/button';
import { useCreateOrEditOrderAdmin } from '../model';
import {
	AdditionalInfo,
	ContactInfo,
	DeliveryInfo,
	MainInfo,
	PaymentInfo,
} from './components';
import { OrderItems } from './order-items';

type Props = {
	data?: IOrdersResponse;
	actionDelete?: ReactNode;
	otherActions?: ReactNode;
};

export const AdminOrderForm = ({ data, actionDelete, otherActions }: Props) => {
	const { control, handleSubmit, onSubmit, isPending, setValue } =
		useCreateOrEditOrderAdmin({ data });

	return (
		<AdminCreateEditFormContainer
			handleSubmit={handleSubmit}
			onSubmit={onSubmit}
			isPending={isPending}
			idForm='orderForm'
			actionDelete={actionDelete}
			otherActions={otherActions}
			leftChildren={
				<>
					<ContactInfo control={control} />
					<DeliveryInfo control={control} />
					<PaymentInfo control={control} />
					<AdditionalInfo control={control} />
					<OrderItems setValue={setValue} control={control} />
				</>
			}
			rightChildren={
				<>
					{/* Блок информации о товаре — только при редактировании */}
					{!!data && (
						<>
							<MainInfo data={data} />
							<AdminFormCreateAndRefreshInfo
								createdAt={data.createdAt}
								updatedAt={data.updatedAt}
							/>
							{!!data?.orderStatusHistory && (
								<AdminRightFormCreateEditItem title='история статусов'>
									<OrderHistoryStatus
										data={data.orderStatusHistory}
										expectedDate={data.expectedDate}
									/>
								</AdminRightFormCreateEditItem>
							)}
						</>
					)}
				</>
			}
			actionSubmitForm={
				<ButtonCustom
					type='submit'
					size='s'
					disabled={isPending}
					isLoading={isPending}
					form={'orderForm'}
					mode='admin'
				>
					{data ? 'Обновить заказ' : 'Создать новый заказ'}
				</ButtonCustom>
			}
		/>
	);
};
