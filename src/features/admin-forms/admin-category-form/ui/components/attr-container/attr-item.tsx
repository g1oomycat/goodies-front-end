'use client';
import { categoryAttrMeta, EnumAttribute } from '@/entities/category';
import { AdminFormCreateEditItem } from '@/shared/components/admin-form-create-edit-item';
import {
	productNameValidation,
	requiredValidation,
} from '@/shared/lib/input-validations';
import { AutocompleteMui } from '@/shared/ui/components/autocomplete-mui';
import { ButtonCustom } from '@/shared/ui/components/button';
import { CheckboxMui } from '@/shared/ui/components/checkbox';
import { InputMui } from '@/shared/ui/components/input-mui';
import { InputMultipleMui } from '@/shared/ui/components/input-multiple-mui';
import {
	sxAutocompletePopper,
	sxCheckbox,
	sxMuiInput,
} from '@/shared/ui/styles';
import { useEffect } from 'react';
import { Control, UseFormSetValue, useWatch } from 'react-hook-form';

type Props = {
	control: Control<any>;
	index: number;
	remove: (index: number) => void;
	setValue: UseFormSetValue<any>;
};
export const CategoryAttributesItemForm = ({
	control,
	index,
	remove,
	setValue,
}: Props) => {
	const name = `attributes.${index}`; // Формируем корректное имя поля
	const type = useWatch({ control, name: `${name}.type` }); // Следим за типом
	// Если type !== SELECT, сбрасываем options
	useEffect(() => {
		if (type !== EnumAttribute.SELECT) {
			setValue(`${name}.options`, []);
		}
	}, [type, setValue, name]);

	return (
		<>
			<AdminFormCreateEditItem title={`Атрибут ${index + 1}`}>
				<InputMui
					name={`${name}.name`}
					control={control}
					placeholder='Название атрибута'
					validation={productNameValidation(true)}
					sx={sxMuiInput}
					size='small'
				/>
			</AdminFormCreateEditItem>
			<AdminFormCreateEditItem title=''>
				<AutocompleteMui
					name={`${name}.type`}
					control={control}
					placeholder='Тип атрибута'
					options={categoryAttrMeta}
					sx={sxMuiInput}
					validation={requiredValidation}
					size='small'
					sxPopper={sxAutocompletePopper}
				/>
			</AdminFormCreateEditItem>
			{type === EnumAttribute.SELECT && (
				<AdminFormCreateEditItem title=''>
					<InputMultipleMui
						name={`${name}.options`}
						control={control}
						placeholder='введите опцию и нажмите enter'
						validation={requiredValidation}
						sx={sxMuiInput}
						size='small'
					/>
				</AdminFormCreateEditItem>
			)}
			<AdminFormCreateEditItem title='' isChildrenInput={false}>
				<CheckboxMui
					control={control}
					name={`${name}.filterable`}
					label='Фильтруемый'
					sx={sxCheckbox}
					position='center'
				/>
			</AdminFormCreateEditItem>
			<AdminFormCreateEditItem title='' isChildrenInput={false}>
				<ButtonCustom
					size='s'
					colorType='second'
					type='button'
					onClick={() => remove(index)}
					mode='admin'
				>
					Удалить
				</ButtonCustom>
			</AdminFormCreateEditItem>
		</>
	);
};
