import { IOrdersResponse } from '@/entities/orders';
import { AdminOrderForm } from '@/features/admin-forms/admin-order-form';
import { AdminFormCreateEditSkeleton } from '@/shared/components/admin-create-edit-form-container/skeleton';

type Props = {
	data?: IOrdersResponse;
	type?: 'create' | 'edit';
};

export const AdminEditCreateFormOrder = ({ data, type = 'create' }: Props) => {
	if (type === 'create') {
		return <AdminOrderForm />;
	}
	return (
		<>
			{!data ? <AdminFormCreateEditSkeleton /> : <AdminOrderForm data={data} />}
		</>
	);
};
