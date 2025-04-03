import { formatDateTimeLong } from '@/shared/lib/format-date';
import { formatCurrency } from '@/shared/lib/format-сurrency';
import { IOrdersResponse } from '../../types';
import { deliveryMethods } from './delivery-methods';
import { paymentMethods } from './payment-methods';
export const ordersRows = (data?: IOrdersResponse[]) => {
	if (!data) {
		return null;
	}
	return data.map(order => ({
		id: order.id,
		publicId: order.publicId,
		fullName: `${order.userInfo.firstName} ${order.userInfo.lastName}`,
		email: order.userInfo.email,
		phone: order.userInfo.phone,
		total: formatCurrency(order.total),
		quantity: `${order.quantity} шт.`,
		status: order.status,
		deliveryMethod: deliveryMethods[order.deliveryMethod],
		paymentMethod: paymentMethods[order.paymentMethod],
		createdAt: formatDateTimeLong(order.createdAt),
	}));
};
