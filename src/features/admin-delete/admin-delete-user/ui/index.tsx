import { ButtonCustom } from '@/shared/ui/components/button';
import { useAdminDeleteUser } from '../model';

type Props = {
	id: string;
};

export const AdminDeleteUserButton = ({ id }: Props) => {
	const { handleDeleteUser, isPending } = useAdminDeleteUser();
	return (
		<ButtonCustom
			mode='admin'
			size='s'
			colorType='second'
			disabled={isPending}
			isLoading={isPending}
			onClick={() => handleDeleteUser(id)}
		>
			удалить пользователя
		</ButtonCustom>
	);
};
