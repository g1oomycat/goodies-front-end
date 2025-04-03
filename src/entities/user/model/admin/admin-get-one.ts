import { useQuery } from '@tanstack/react-query';
import { adminUsersService } from '../../api';

export const getOneUserAdmin = (id: string) => {
	return useQuery({
		queryKey: ['get-one-user-by-id', { id }],
		queryFn: () => adminUsersService.getUser(id),
	});
};
