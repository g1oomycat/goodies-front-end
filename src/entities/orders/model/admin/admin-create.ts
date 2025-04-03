'use router';
import { getRouteAdminOrders } from '@/shared/constants/router';
import { handleAxiosError } from '@/shared/lib/handle-axios-error';
import { useMutation } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';
import { toast } from 'sonner';
import { adminOrdersService } from '../../api';
import { IOrdersCreateByAdmin } from '../../types/api';

export function createOrderAdmin() {
	// Добавление в избранное
	const router = useRouter();
	return useMutation({
		mutationKey: ['create-order'],
		mutationFn: (data: IOrdersCreateByAdmin) =>
			adminOrdersService.createOrder(data),
		onSuccess: () => {
			toast.success(`заказ создан`, {
				action: {
					label: 'К списку',
					onClick: () => router.push(getRouteAdminOrders()),
				},
				closeButton: true,
				duration: 6000,
			});
		},

		onError: error => {
			handleAxiosError(error, 'создании заказа');
		},
	});
}
