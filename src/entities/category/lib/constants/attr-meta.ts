import { IOptionSelectMui } from '@/shared/types/options-select-mui';
import { EnumAttribute } from '../../types';

export const categoryAttrMeta: IOptionSelectMui = [
	{ id: EnumAttribute.BOOLEAN, label: 'да или нет' },
	{ id: EnumAttribute.NUMBER, label: 'число' },
	{ id: EnumAttribute.SELECT, label: 'выбор из нескольких вариантов' },
	{ id: EnumAttribute.STRING, label: 'строка' },
] as const;
