import { ButtonCustom } from '@/shared/ui/components/button';
import { useAdminDeleteBanner } from '../model';

type Props = {
	id: string;
};

export const AdminDeleteBannerButton = ({ id }: Props) => {
	const { handleDeleteBanner, isPending } = useAdminDeleteBanner();
	return (
		<ButtonCustom
			size='s'
			colorType='second'
			disabled={isPending}
			isLoading={isPending}
			onClick={() => handleDeleteBanner(id)}
			mode='admin'
		>
			удалить баннер
		</ButtonCustom>
	);
};
