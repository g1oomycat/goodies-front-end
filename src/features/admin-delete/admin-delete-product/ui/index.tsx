import { ButtonCustom } from '@/shared/ui/components/button';
import { useAdminDeleteProduct } from '../model';

type Props = {
	id: string;
};

export const AdminDeleteProductButton = ({ id }: Props) => {
	const { handleDeleteProduct, isPending } = useAdminDeleteProduct();
	return (
		<ButtonCustom
			size='s'
			colorType='second'
			disabled={isPending}
			isLoading={isPending}
			onClick={() => handleDeleteProduct(id)}
			mode='admin'
		>
			удалить товар
		</ButtonCustom>
	);
};
