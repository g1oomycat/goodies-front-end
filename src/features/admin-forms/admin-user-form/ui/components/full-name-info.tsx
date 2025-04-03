import { genderOptions } from '@/entities/user';
import { AdminFormCreateEditBlock } from '@/shared/components/admin-form-create-edit-block';
import { AdminFormCreateEditItem } from '@/shared/components/admin-form-create-edit-item';
import {
	nameValidation,
	requiredValidation,
} from '@/shared/lib/input-validations';
import { InputMui } from '@/shared/ui/components/input-mui';
import { RadioMui } from '@/shared/ui/components/radio-mui';
import { sxMuiInput } from '@/shared/ui/styles';
import { sxMuiRadio } from '@/shared/ui/styles/mui/sx-radio';
import { Control } from 'react-hook-form';

type Props = {
	control: Control<any>;
};

export const FullNameInfo = ({ control }: Props) => {
	return (
		<AdminFormCreateEditBlock title='ФИО'>
			<AdminFormCreateEditItem title='имя'>
				<InputMui
					name='firstName'
					control={control}
					placeholder='имя'
					validation={nameValidation(false)}
					sx={sxMuiInput}
					size='small'
				/>
			</AdminFormCreateEditItem>
			<AdminFormCreateEditItem title='фамилия'>
				<InputMui
					name='lastName'
					control={control}
					placeholder='фамилия'
					validation={nameValidation(false)}
					sx={sxMuiInput}
					size='small'
				/>
			</AdminFormCreateEditItem>
			<AdminFormCreateEditItem title='отчество'>
				<InputMui
					name='surName'
					control={control}
					placeholder='отчество'
					validation={nameValidation(false)}
					sx={sxMuiInput}
					size='small'
				/>
			</AdminFormCreateEditItem>

			<AdminFormCreateEditItem title='гендер' isChildrenInput={false}>
				<RadioMui
					name='gender'
					control={control}
					data={genderOptions}
					validation={requiredValidation}
					sx={sxMuiRadio}
				/>
			</AdminFormCreateEditItem>
		</AdminFormCreateEditBlock>
	);
};
