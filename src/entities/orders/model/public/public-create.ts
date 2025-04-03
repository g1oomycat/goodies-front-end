import { showToastSuccess } from '@/features/show-custom-toaster/model';
import { handleAxiosError } from '@/shared/lib/handle-axios-error';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { ordersService } from '../../api';
import { IOrdersCreate } from '../../types';

export const createOrderPublic = () => {
	const queryClient = useQueryClient();
	return useMutation({
		mutationKey: ['crate-order'],
		mutationFn: (data: IOrdersCreate) => ordersService.createOrder(data),
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: ['get-all-orders-self'] });
			showToastSuccess({ message: 'заказ создан' });
		},
		onError: error => {
			handleAxiosError(error, 'создание заказа', false);
		},
	});
};
