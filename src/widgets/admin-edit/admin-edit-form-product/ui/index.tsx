import { IProductsResponse } from '@/entities/product';
import { AdminDeleteProductButton } from '@/features/admin-delete/admin-delete-product';
import { AdminProductForm } from '@/features/admin-forms/admin-product-form';
import { AdminFormCreateEditSkeleton } from '@/shared/components/admin-create-edit-form-container/skeleton';

type Props = {
	data?: IProductsResponse;
};

export const AdminEditFormProduct = ({ data }: Props) => {
	return (
		<>
			{!data ? (
				<AdminFormCreateEditSkeleton />
			) : (
				<AdminProductForm
					data={data}
					actionDelete={<AdminDeleteProductButton id={data.id} />}
				/>
			)}
		</>
	);
};
