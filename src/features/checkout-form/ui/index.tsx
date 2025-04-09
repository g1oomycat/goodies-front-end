'use client';
import { ICartResponse } from '@/entities/cart';
import { CheckoutItem } from '@/entities/checkout/ui/checkout-item';
import { CheckoutStep } from '@/entities/checkout/ui/checkout-step';
import {
	deliveryMethodsArray,
	EnumPaymentMethod,
	paymentMethodsArray,
} from '@/entities/orders';
import { IUsersResponse } from '@/entities/user';
import {
	addressValidation,
	emailValidation,
	nameValidation,
	requiredValidation,
	telephoneValidation,
} from '@/shared/lib/input-validations';

import { InputMui } from '@/shared/ui/components/input-mui';
import { RadioMui } from '@/shared/ui/components/radio-mui';

import { ButtonCustom } from '@/shared/ui/components/button';
import { CheckboxMui } from '@/shared/ui/components/checkbox';
import { InputMuiMask } from '@/shared/ui/components/input-masks-mui';
import { useCreateOrder } from '../model';
import styles from './styles.module.scss';

type Props = {
	cart: ICartResponse;
	user: IUsersResponse;
};

export const CheckoutForm = ({ cart, user }: Props) => {
	const { control, handleSubmit, isPending, onSubmit } = useCreateOrder(
		cart,
		user
	);
	return (
		<form
			noValidate
			id='checkout'
			className={styles.root}
			aria-disabled={isPending}
			onSubmit={handleSubmit(onSubmit)}
		>
			{/* 1. Адрес и способ доставки */}
			<CheckoutStep step={1} totalSteps={3} title='Адрес и способ доставки'>
				<CheckoutItem title='Способ доставки' isChildrenInput={false}>
					<RadioMui
						name='deliveryMethod'
						control={control}
						data={deliveryMethodsArray}
						validation={requiredValidation}
						flexDirection='column'
					/>
				</CheckoutItem>
				<CheckoutItem title='Адрес'>
					<InputMui
						control={control}
						name='address'
						placeholder='город, улица, дом, квартира'
						validation={addressValidation(true)}
						size='small'
						variant='standard'
					/>
				</CheckoutItem>
				<CheckoutItem title='Комментарий'>
					<InputMui
						control={control}
						name='comment'
						placeholder='доставить после 18:00'
						size='small'
						variant='standard'
					/>{' '}
				</CheckoutItem>
			</CheckoutStep>

			{/* 2. Получатель */}
			<CheckoutStep step={2} totalSteps={3} title='Получатель'>
				<CheckoutItem title='Контакты'>
					<InputMuiMask
						type='phone'
						control={control}
						name='userInfo.phone'
						validation={telephoneValidation(true)}
						placeholder='номер телефона'
						size='small'
						variant='standard'
					/>
					<InputMui
						control={control}
						name='userInfo.email'
						placeholder='почта'
						validation={emailValidation(true)}
						size='small'
						variant='standard'
					/>
				</CheckoutItem>
				<CheckoutItem title='Ваши данные'>
					<InputMui
						control={control}
						name='userInfo.firstName'
						placeholder='имя'
						validation={nameValidation(true)}
						size='small'
						variant='standard'
					/>
					<InputMui
						control={control}
						name='userInfo.lastName'
						placeholder='фамилия'
						validation={nameValidation(true)}
						size='small'
						variant='standard'
					/>
					<CheckboxMui
						name='accept'
						control={control}
						className='mt-10'
						label={
							<p className='fs-s-1'>
								я даю согласие на обработку своих персональных данных в
								соответствии с политикой обработки персональных данных
							</p>
						}
						validation={requiredValidation}
					/>
				</CheckoutItem>
			</CheckoutStep>

			{/* 3. Оплата */}
			<CheckoutStep step={3} totalSteps={3} title='Способ оплаты'>
				<CheckoutItem>
					<RadioMui
						name='paymentMethod'
						defaultValue={EnumPaymentMethod.TRANSFER}
						control={control}
						data={paymentMethodsArray}
						validation={requiredValidation}
						flexDirection='column'
					/>
				</CheckoutItem>
				<CheckoutItem>
					<ButtonCustom fullWidth size='l' type='submit'>
						Оформить заказ
					</ButtonCustom>
				</CheckoutItem>
			</CheckoutStep>
		</form>
	);
};
