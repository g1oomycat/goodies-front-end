import { ButtonCustom } from '@/shared/ui/components/button';
import { useAdminDeleteCategory } from '../model';

type Props = {
	id: string;
};

export const AdminDeleteCategoryButton = ({ id }: Props) => {
	const { handleDeleteCategory, isPending } = useAdminDeleteCategory();
	return (
		<ButtonCustom
			size='s'
			colorType='second'
			disabled={isPending}
			isLoading={isPending}
			onClick={() => handleDeleteCategory(id)}
			mode='admin'
		>
			удалить категорию
		</ButtonCustom>
	);
};
