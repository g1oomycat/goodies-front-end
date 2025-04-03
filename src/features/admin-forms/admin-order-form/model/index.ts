'use client';

import {
	createOrderAdmin,
	EnumDeliveryMethod,
	EnumOrderStatus,
	EnumPaymentMethod,
	IOrderForm,
	IOrdersResponse,
	updateOrderAdmin,
} from '@/entities/orders';
import { formatDateLong } from '@/shared/lib/format-date';

import { SubmitHandler, useForm } from 'react-hook-form';

type Props = {
	data?: IOrdersResponse;
};

export const useCreateOrEditOrderAdmin = ({ data }: Props) => {
	// Инициализируем форму с начальными значениями (если редактирование — берём из `data`)

	const { handleSubmit, control, reset, setValue } = useForm<IOrderForm>({
		mode: 'onChange',
		defaultValues: {
			address: data?.address ?? '',
			comment: data?.comment ?? '',
			percentDiscount: data?.percentDiscount.toString() ?? '',
			manualDiscount: data?.manualDiscount.toString() ?? '',
			expectedDate: data?.expectedDate ? formatDateLong(data.expectedDate) : '',
			status: data?.status ?? EnumOrderStatus.PROCESSING,
			deliveryMethod: data?.deliveryMethod ?? EnumDeliveryMethod.YANDEX,
			paymentMethod: data?.paymentMethod ?? EnumPaymentMethod.TRANSFER,
			userInfo: data?.userInfo ?? {
				email: '',
				firstName: '',
				lastName: '',
				phone: '',
			},
			orderItems: data?.orderItems ?? [],
		},
	});

	// API-хуки для создания и обновления продукта
	const { mutateAsync: mutateAsyncOrders, isPending: isPendingOrders } =
		createOrderAdmin();
	const {
		mutateAsync: mutateAsyncUpdateOrders,
		isPending: isPendingUpdateOrders,
	} = updateOrderAdmin(data?.id ?? '');

	// Функция обработки формы
	const onSubmit: SubmitHandler<IOrderForm> = async submitData => {
		// Определяем, создаем товар или обновляем
		const mutateOrder = data ? mutateAsyncUpdateOrders : mutateAsyncOrders;
		try {
			await mutateOrder({
				...submitData,
				manualDiscount: submitData?.manualDiscount
					? Number(submitData.manualDiscount)
					: undefined,
				percentDiscount: submitData?.percentDiscount
					? Number(submitData.percentDiscount)
					: undefined,
				orderItems: submitData?.orderItems.map(item => ({
					discount: Number(item.discount),
					quantity: Number(item.quantity),
					unitPrice: Number(item.unitPrice),
					productId: item.productId,
				})),
			});
		} catch (error) {
			return; // Ошибка при создании/обновлении — прерываем выполнение
		}

		// Если это создание товара, сбрасываем форму
		if (!data) {
			reset({
				address: '',
				comment: '',
				percentDiscount: undefined,
				manualDiscount: undefined,
				expectedDate: '',
				status: EnumOrderStatus.CREATED,
				deliveryMethod: EnumDeliveryMethod.YANDEX,
				paymentMethod: EnumPaymentMethod.TRANSFER,
				userInfo: {
					email: '',
					firstName: '',
					lastName: '',
					phone: '',
				},
				orderItems: [],
			});
		}
	};

	return {
		handleSubmit,
		control,
		onSubmit,
		setValue,
		isPending: isPendingOrders || isPendingUpdateOrders,
	};
};
