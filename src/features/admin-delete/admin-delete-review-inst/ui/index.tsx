import { ButtonCustom } from '@/shared/ui/components/button';
import { useAdminDeleteReviewInst } from '../model';

type Props = {
	id: string;
};

export const AdminDeleteReviewInstButton = ({ id }: Props) => {
	const { handleDeleteReviewInst, isPending } = useAdminDeleteReviewInst();
	return (
		<ButtonCustom
			mode='admin'
			size='s'
			colorType='second'
			disabled={isPending}
			isLoading={isPending}
			onClick={() => handleDeleteReviewInst(id)}
		>
			удалить отзыв инсты
		</ButtonCustom>
	);
};
