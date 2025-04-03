import { orderStatusOptions } from '@/entities/orders';
import { AdminFormCreateEditBlock } from '@/shared/components/admin-form-create-edit-block';
import { AdminFormCreateEditItem } from '@/shared/components/admin-form-create-edit-item';
import { textValidation } from '@/shared/lib/input-validations';
import { AutocompleteMui } from '@/shared/ui/components/autocomplete-mui';
import { InputMui } from '@/shared/ui/components/input-mui';
import { sxAutocompletePopper, sxMuiInput } from '@/shared/ui/styles';
import { Control } from 'react-hook-form';

type Props = { control: Control<any> };

export const AdditionalInfo = ({ control }: Props) => {
	return (
		<AdminFormCreateEditBlock title='дополнительная информация'>
			<AdminFormCreateEditItem title='статус'>
				<AutocompleteMui
					name='status'
					options={orderStatusOptions}
					control={control}
					placeholder='статус'
					sx={sxMuiInput}
					sxPopper={sxAutocompletePopper}
					size='small'
				/>
			</AdminFormCreateEditItem>
			<AdminFormCreateEditItem title='комментарий'>
				<InputMui
					name='comment'
					control={control}
					placeholder='комментарий к заказу'
					validation={textValidation()}
					sx={sxMuiInput}
					size='small'
				/>
			</AdminFormCreateEditItem>
		</AdminFormCreateEditBlock>
	);
};
