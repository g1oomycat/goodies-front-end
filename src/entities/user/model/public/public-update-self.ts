import { showToastSuccess } from '@/features/show-custom-toaster/model';
import { handleAxiosError } from '@/shared/lib/handle-axios-error';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { usersService } from '../../api';
import { IUsersUpdate } from '../../types';

export const updateUserSelf = () => {
	const queryClient = useQueryClient();

	return useMutation({
		mutationKey: ['update-user-self'],
		mutationFn: (data: IUsersUpdate) => usersService.updateUser(data),
		onSuccess() {
			queryClient.invalidateQueries({ queryKey: ['get-user-self'] });
			showToastSuccess({ message: 'профиль обновлен' });
		},
		onError(error) {
			handleAxiosError(error, 'обновление профиля', false);
		},
	});
};
