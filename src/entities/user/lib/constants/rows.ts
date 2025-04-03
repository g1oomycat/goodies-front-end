import { formatDateTimeLong } from '@/shared/lib/format-date';
import { IUsersResponse } from '../../types';

export const usersRows = (data?: IUsersResponse[]) => {
	if (!data) {
		return null;
	}
	return data.map(user => ({
		id: user.id,
		fullName: `${user.firstName ? user.firstName : 'Не указан'} ${
			user.lastName ? user.lastName : 'Не указан'
		}`,
		email: user.email,
		phone: user.phone ?? 'Не указан',
		role: user.role,
		createdAt: formatDateTimeLong(user.createdAt),
	}));
};
