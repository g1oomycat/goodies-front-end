import { ICartResponse } from '@/entities/cart';
import {
	createOrderPublic,
	EnumDeliveryMethod,
	EnumPaymentMethod,
	IOrderCreateForm,
	IOrderItemBulkCreate,
	IOrdersCreate,
} from '@/entities/orders';
import { IUsersResponse, updateUserSelf } from '@/entities/user';
import { getRouteCheckoutSuccess } from '@/shared/constants/router';
import { useQueryClient } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';

import { SubmitHandler, useForm } from 'react-hook-form';

export const useCreateOrder = (cart: ICartResponse, user: IUsersResponse) => {
	const queryClient = useQueryClient();
	const { replace } = useRouter();

	const { handleSubmit, control } = useForm<IOrderCreateForm>({
		mode: 'onBlur',
		defaultValues: {
			address: user.address ?? '',
			comment: '',
			deliveryMethod: EnumDeliveryMethod.YANDEX,
			paymentMethod: EnumPaymentMethod.TRANSFER,
			userInfo: {
				email: user.email,
				firstName: user.firstName ?? '',
				lastName: user.lastName ?? '',
				phone: user.phone ?? '',
			},
			accept: true,
		},
	});
	const {
		mutateAsync: mutateAsyncOrder,
		error,
		isPending: isPendingOrder,
	} = createOrderPublic();

	const { mutate: mutateUser, isPending: isPendingUser } = updateUserSelf();

	const onSubmit: SubmitHandler<IOrderCreateForm> = async ({
		userInfo,
		accept,
		...data
	}) => {
		const { address, comment, paymentMethod, deliveryMethod } = data;

		// Формируем список товаров в заказе
		const orderItems: IOrderItemBulkCreate[] =
			cart.result.orderItems?.map(
				({ quantity, product: { price, discount }, productId }) => ({
					quantity,
					unitPrice: price,
					productId,
					discount,
				})
			) ?? [];

		// Формируем объект заказа
		const orderData: IOrdersCreate = {
			address,
			comment,
			paymentMethod,
			deliveryMethod,
			userInfo,
			orderItems,
		};

		try {
			// Отправка данных заказа
			const currentOrder = await mutateAsyncOrder(orderData);
			// Обновление данных пользователя
			mutateUser({
				...user,
				dateOfBirth: user.dateOfBirth ?? undefined,
				phone: user.phone ?? userInfo.phone,
				address: user.address ?? address,
				firstName: user.firstName ?? userInfo.firstName,
				lastName: user.lastName ?? userInfo.lastName,
			});
			queryClient.invalidateQueries({ queryKey: ['cart'] });
			window.history.pushState(
				null,
				'',
				getRouteCheckoutSuccess(currentOrder.publicId)
			);
			window.history.replaceState(
				null,
				'',
				getRouteCheckoutSuccess(currentOrder.publicId)
			);
			window.location.replace(getRouteCheckoutSuccess(currentOrder.publicId));
			replace(getRouteCheckoutSuccess(currentOrder.publicId));
		} catch (error) {}
	};

	return {
		handleSubmit,
		control,
		error,
		onSubmit,
		isPending: isPendingOrder || isPendingUser,
	};
};
