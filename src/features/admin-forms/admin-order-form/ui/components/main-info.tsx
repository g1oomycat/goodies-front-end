import { IOrdersResponse, orderStatusMeta } from '@/entities/orders';
import { AdminRightFormCreateEditItem } from '@/shared/components/admin-right-form-create-edit-item';
import { formatCurrency, formatPercentage } from '@/shared/lib/format-сurrency';

type Props = {
	data: IOrdersResponse;
};

export const MainInfo = ({ data }: Props) => {
	return (
		<AdminRightFormCreateEditItem
			title='основная информация'
			value={{
				items: [
					{ key: 'номер', value: data.publicId },

					{
						key: 'Статус',
						value: orderStatusMeta[data.status].label,
					},
					{ key: 'количество товаров', value: data.quantity },

					{
						key: 'начальная сумма',
						value: formatCurrency(data.originalTotal - data.discount),
					},
					{
						key: 'процентная скидка',
						value: formatPercentage(data.percentDiscount),
					},
					{
						key: 'ручная скидка',
						value: formatCurrency(data.manualDiscount),
					},
					{ key: 'сумма', value: formatCurrency(data.total) },
				],
			}}
		/>
	);
};
