import { IOptionSelectMui } from '@/shared/types/options-select-mui';
import { EnumOrderStatus } from '../../types';

export const orderStatusMeta: Record<
	EnumOrderStatus,
	{ label: string; textColor: string; bgColor: string }
> = {
	CREATED: { label: 'Создан', textColor: '#333', bgColor: '#F3F4F6' }, // Серый
	PROCESSING: {
		label: 'В обработке',
		textColor: '#9333EA',
		bgColor: '#EDE9FE',
	}, // Фиолетовый
	AWAITING_PAYMENT: {
		label: 'Ожидает оплаты',
		textColor: '#D97706',
		bgColor: '#FEF3C7',
	}, // Желтый
	PAID: { label: 'Оплачен', textColor: '#1D4ED8', bgColor: '#DBEAFE' }, // Синий
	AWAITING_SHIPMENT: {
		label: 'Ожидает отправки',
		textColor: '#0284C7',
		bgColor: '#E0F2FE',
	}, // Голубой
	SHIPPED: { label: 'Отправлен', textColor: '#059669', bgColor: '#D1FAE5' }, // Зеленый
	DELIVERED: { label: 'Доставлен', textColor: '#10B981', bgColor: '#DCFCE7' }, // Светло-зеленый
	COMPLETED: { label: 'Выполнен', textColor: '#FFFFFF', bgColor: '#16A34A' }, // Зеленый (инверсия)
	AWAITING_RETURN: {
		label: 'Ожидает возврата',
		textColor: '#7C3AED',
		bgColor: '#DDD6FE',
	}, // Фиолетовый
	RETURN_PROCESSED: {
		label: 'Возврат обработан',
		textColor: '#065F46',
		bgColor: '#D1FAE5',
	}, // Темно-зеленый
	RETURNED: { label: 'Возвращён', textColor: '#B91C1C', bgColor: '#FEE2E2' }, // Темно-красный
	CANCELLED: { label: 'Отменён', textColor: '#DC2626', bgColor: '#FECACA' }, // Красный
};
export const orderStatusOptions: IOptionSelectMui = Object.entries(
	orderStatusMeta
).map(([id, { label }]) => ({
	id,
	label,
}));
