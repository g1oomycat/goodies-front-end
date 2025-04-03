import { AdminFormCreateEditBlock } from '@/shared/components/admin-form-create-edit-block';
import { AdminFormCreateEditItem } from '@/shared/components/admin-form-create-edit-item';
import { requiredValidation } from '@/shared/lib/input-validations';
import { IOptionSelectMui } from '@/shared/types/options-select-mui';
import { AutocompleteMui } from '@/shared/ui/components/autocomplete-mui';
import { sxAutocompletePopper, sxMuiInput } from '@/shared/ui/styles';
import { Control } from 'react-hook-form';

type Props = {
	control: Control<any>;
	categoryOptions: IOptionSelectMui;
};

export const CategoryInfo = ({ control, categoryOptions }: Props) => {
	return (
		<AdminFormCreateEditBlock title='Категория *'>
			<AdminFormCreateEditItem title=''>
				<AutocompleteMui
					name='categoryId'
					control={control}
					placeholder='Выберите категорию'
					validation={requiredValidation}
					options={categoryOptions}
					sx={sxMuiInput}
					size='small'
					sxPopper={sxAutocompletePopper}
				/>
			</AdminFormCreateEditItem>
		</AdminFormCreateEditBlock>
	);
};
