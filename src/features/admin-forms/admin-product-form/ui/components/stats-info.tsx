import { IProductsResponse } from '@/entities/product';
import { AdminFormCreateEditBlock } from '@/shared/components/admin-form-create-edit-block';
import { AdminFormCreateEditItem } from '@/shared/components/admin-form-create-edit-item';
import { DotLoader } from '@/shared/kit/dot-loader';
import { Control } from 'react-hook-form';

type Props = {
	control: Control<any>;
	data: IProductsResponse;
};

export const StatsInfo = ({ control, data }: Props) => {
	return (
		<AdminFormCreateEditBlock title='Статистика'>
			<AdminFormCreateEditItem title=''>
				<DotLoader
					items={[
						{
							key: 'покупок',
							value: data.purchaseCount.toString(),
						},
						{
							key: 'заказов',
							value: data.ordersCount.toString(),
						},
					]}
				/>
			</AdminFormCreateEditItem>
		</AdminFormCreateEditBlock>
	);
};
