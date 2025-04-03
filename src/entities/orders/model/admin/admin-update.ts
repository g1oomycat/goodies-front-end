'use router';
import { getRouteAdminOrders } from '@/shared/constants/router';
import { handleAxiosError } from '@/shared/lib/handle-axios-error';

import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';
import { toast } from 'sonner';
import { adminOrdersService } from '../../api';
import { IOrdersUpdateByAdmin } from '../../types';

export function updateOrderAdmin(id: string) {
	const queryClient = useQueryClient();
	// Добавление в избранное
	const router = useRouter();

	return useMutation({
		mutationKey: ['update-order', id],
		mutationFn: (data: IOrdersUpdateByAdmin) =>
			adminOrdersService.updateOrder(id, data),
		onSuccess: () => {
			queryClient.invalidateQueries({
				queryKey: ['get-one-order-by-id', id],
			});

			toast.success(`заказ обновлен`, {
				action: {
					label: 'К списку',
					onClick: () => router.push(getRouteAdminOrders()),
				},
				closeButton: true,
				duration: 6000,
			});
		},
		onError: error => {
			handleAxiosError(error, 'обновление заказа');
		},
	});
}
