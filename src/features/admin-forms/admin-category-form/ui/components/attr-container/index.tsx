'use client';
import { EnumAttribute } from '@/entities/category';
import { AdminFormCreateEditBlock } from '@/shared/components/admin-form-create-edit-block';
import { AdminFormCreateEditItem } from '@/shared/components/admin-form-create-edit-item';
import { ButtonCustom } from '@/shared/ui/components/button';
import { Control, useFieldArray, UseFormSetValue } from 'react-hook-form';
import { CategoryAttributesItemForm } from './attr-item';

type Props = {
	control: Control<any>;
	setValue: UseFormSetValue<any>;
	defaultAttribute: {
		name: string;
		filterable: boolean;
		options: never[];
		type: EnumAttribute;
	};
};
export const CategoryAttributesContainerForm = ({
	control,
	setValue,
	defaultAttribute,
}: Props) => {
	const { fields, append, remove } = useFieldArray({
		control,
		name: 'attributes', // Обязательно указываем имя массива
	});

	return (
		<AdminFormCreateEditBlock title='Атрибуты *'>
			{fields.map((field, index) => (
				<CategoryAttributesItemForm
					setValue={setValue}
					control={control}
					key={field.id}
					index={index}
					remove={remove}
				/>
			))}
			<AdminFormCreateEditItem title='' isChildrenInput={false}>
				<ButtonCustom
					mode='admin'
					size='m'
					colorType='primary'
					type='button'
					onClick={() => append(defaultAttribute)}
				>
					Добавить еще атрибут
				</ButtonCustom>
			</AdminFormCreateEditItem>
		</AdminFormCreateEditBlock>
	);
};
