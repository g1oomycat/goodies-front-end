import { EnumAttribute, ICategoriesResponse } from '@/entities/category';
import { AdminFormCreateEditBlock } from '@/shared/components/admin-form-create-edit-block';
import { AdminFormCreateEditItem } from '@/shared/components/admin-form-create-edit-item';
import { optionYesNoNone } from '@/shared/constants/option-yes-no-none';
import {
	numberValidation,
	requiredValidation,
} from '@/shared/lib/input-validations';
import { AutocompleteMui } from '@/shared/ui/components/autocomplete-mui';
import { InputMui } from '@/shared/ui/components/input-mui';
import { sxAutocompletePopper, sxMuiInput } from '@/shared/ui/styles';
import { Control } from 'react-hook-form';

type Props = {
	selectedCategory?: ICategoriesResponse;
	control: Control<any>;
};
export const ProductAttributesForm = ({ selectedCategory, control }: Props) => {
	if (!selectedCategory) {
		return (
			<AdminFormCreateEditBlock title='Характеристики *'>
				<AdminFormCreateEditItem title=''>
					<span>Выберите категорию для заполнения характеристик</span>
				</AdminFormCreateEditItem>
			</AdminFormCreateEditBlock>
		);
	}

	return selectedCategory.attributes?.map(attr => {
		const fieldName = `attributes.${attr.id};${attr.name}.value`;

		if (
			attr.type === EnumAttribute.SELECT ||
			attr.type === EnumAttribute.BOOLEAN
		) {
			return (
				<AdminFormCreateEditBlock title='Характеристики *'>
					<AdminFormCreateEditItem title={attr.name} key={fieldName}>
						<AutocompleteMui
							name={fieldName}
							control={control}
							placeholder='Выберите характеристику'
							options={
								attr.type === EnumAttribute.SELECT
									? attr.options ?? []
									: optionYesNoNone
							}
							sx={sxMuiInput}
							size='small'
							sxPopper={sxAutocompletePopper}
							validation={requiredValidation}
						/>
					</AdminFormCreateEditItem>
				</AdminFormCreateEditBlock>
			);
		}

		return (
			<AdminFormCreateEditBlock title='Характеристики *'>
				{' '}
				<AdminFormCreateEditItem title={attr.name} key={fieldName}>
					<InputMui
						name={fieldName}
						control={control}
						placeholder='Введите значение'
						type={attr.type === EnumAttribute.NUMBER ? 'number' : 'text'}
						sx={sxMuiInput}
						size='small'
						validation={
							attr.type === EnumAttribute.NUMBER
								? numberValidation(true, 0)
								: requiredValidation
						}
					/>
				</AdminFormCreateEditItem>
			</AdminFormCreateEditBlock>
		);
	});
};
