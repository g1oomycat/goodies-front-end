import { IOptionSelectMui } from '@/shared/types/options-select-mui';
import { EnumPaymentMethod } from '../../types';

export const paymentMethods: Record<EnumPaymentMethod, string> = {
	[EnumPaymentMethod.TRANSFER]: 'Перевод на карту',
	[EnumPaymentMethod.KASPI]: 'Каспи счет',
};
export const paymentMethodsArray = [
	{ value: EnumPaymentMethod.TRANSFER, label: 'Перевод на карту' },
	{ value: EnumPaymentMethod.KASPI, label: 'Каспи счет' },
];
export const paymentMethodsOptions: IOptionSelectMui = Object.entries(
	paymentMethods
).map(([id, label]) => ({
	id,
	label,
}));
