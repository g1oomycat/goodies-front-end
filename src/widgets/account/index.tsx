import { IUsersResponse } from '@/entities/user';
import { UpdateProfile } from '@/features/user-form';

type Props = {
	userData: IUsersResponse;
};

export const Account = ({ userData }: Props) => {
	return <UpdateProfile data={userData} />;
};
