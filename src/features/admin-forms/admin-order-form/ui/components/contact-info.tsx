import { AdminFormCreateEditBlock } from '@/shared/components/admin-form-create-edit-block';
import { AdminFormCreateEditItem } from '@/shared/components/admin-form-create-edit-item';
import {
	emailValidation,
	nameValidation,
	telephoneValidation,
} from '@/shared/lib/input-validations';
import { InputMuiMask } from '@/shared/ui/components/input-masks-mui';
import { InputMui } from '@/shared/ui/components/input-mui';
import { sxMuiInput } from '@/shared/ui/styles';
import { Control } from 'react-hook-form';

type Props = { control: Control<any> };

export const ContactInfo = ({ control }: Props) => {
	return (
		<AdminFormCreateEditBlock title='Контактная информация *'>
			<AdminFormCreateEditItem title='почта'>
				<InputMui
					name='userInfo.email'
					control={control}
					placeholder='почта'
					validation={emailValidation(true)}
					sx={sxMuiInput}
					size='small'
				/>
			</AdminFormCreateEditItem>
			<AdminFormCreateEditItem title='имя'>
				<InputMui
					name='userInfo.firstName'
					control={control}
					placeholder='имя'
					validation={nameValidation(true)}
					sx={sxMuiInput}
					size='small'
				/>
			</AdminFormCreateEditItem>
			<AdminFormCreateEditItem title='фамилия'>
				<InputMui
					name='userInfo.lastName'
					control={control}
					placeholder='фамилия'
					validation={nameValidation(true)}
					sx={sxMuiInput}
					size='small'
				/>
			</AdminFormCreateEditItem>
			<AdminFormCreateEditItem title='телефон'>
				<InputMuiMask
					type='phone'
					name='userInfo.phone'
					control={control}
					placeholder='телефон'
					validation={telephoneValidation(true)}
					sx={sxMuiInput}
					size='small'
				/>
			</AdminFormCreateEditItem>
		</AdminFormCreateEditBlock>
	);
};
