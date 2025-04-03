import { IOptionSelectMui } from '@/shared/types/options-select-mui';
import { EnumDeliveryMethod } from '../../types';

export const deliveryMethods: Record<EnumDeliveryMethod, string> = {
	[EnumDeliveryMethod.YANDEX]: 'Доставка яндекс',
	[EnumDeliveryMethod.KAZPOCHTA]: 'Казпочта',
};
export const deliveryMethodsArray = [
	{ value: EnumDeliveryMethod.YANDEX, label: 'Доставка яндекс' },
	{ value: EnumDeliveryMethod.KAZPOCHTA, label: 'Казпочта' },
];

export const deliveryMethodsOptions: IOptionSelectMui = Object.entries(
	deliveryMethods
).map(([id, label]) => ({
	id,
	label,
}));
