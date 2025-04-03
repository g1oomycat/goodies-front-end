import { AdminFormCreateEditBlock } from '@/shared/components/admin-form-create-edit-block';
import { AdminFormCreateEditItem } from '@/shared/components/admin-form-create-edit-item';
import {
	addressValidation,
	dateValidation,
	telephoneValidation,
} from '@/shared/lib/input-validations';
import { InputMuiMask } from '@/shared/ui/components/input-masks-mui';
import { InputMui } from '@/shared/ui/components/input-mui';
import { sxMuiInput } from '@/shared/ui/styles';
import { Control } from 'react-hook-form';

type Props = {
	control: Control<any>;
};

export const ContactInfo = ({ control }: Props) => {
	return (
		<AdminFormCreateEditBlock title='контактная информация'>
			<AdminFormCreateEditItem title='дата рождения'>
				<InputMuiMask
					name='dateOfBirth'
					type='date'
					control={control}
					placeholder='дата рождения'
					validation={dateValidation(false)}
					sx={sxMuiInput}
					size='small'
				/>
			</AdminFormCreateEditItem>
			<AdminFormCreateEditItem title='телефон'>
				<InputMuiMask
					name='phone'
					type='phone'
					control={control}
					placeholder='телефон'
					validation={telephoneValidation(false)}
					sx={sxMuiInput}
					size='small'
				/>
			</AdminFormCreateEditItem>
			<AdminFormCreateEditItem title='адрес'>
				<InputMui
					name='address'
					control={control}
					placeholder='адрес'
					validation={addressValidation(false)}
					sx={sxMuiInput}
					size='small'
				/>
			</AdminFormCreateEditItem>
		</AdminFormCreateEditBlock>
	);
};
