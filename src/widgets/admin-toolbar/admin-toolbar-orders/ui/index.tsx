import { IFilterOrders } from '@/entities/orders';
import { AdminOrdersFilter } from '@/features/admin-filters/admin-orders-filters';
import { AdminToolbar } from '@/shared/components/admin-toolbar';
import { getRouteAdminOrderCreate } from '@/shared/constants/router';
import { ButtonCustom } from '@/shared/ui/components/button';
type Props = {
	disabled: boolean;
	formParams?: IFilterOrders;
};

export const AdminToolbarOrders = ({ disabled, formParams }: Props) => {
	return (
		<AdminToolbar
			filterAction={
				<AdminOrdersFilter disabled={disabled} formParams={formParams} />
			}
			otherActions={
				<ButtonCustom
					link={getRouteAdminOrderCreate()}
					size='s'
					contain={true}
					mode='admin'
				>
					создать новый заказ
				</ButtonCustom>
			}
		/>
	);
};
