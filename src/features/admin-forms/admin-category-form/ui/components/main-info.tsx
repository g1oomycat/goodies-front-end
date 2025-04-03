import { AdminFormCreateEditBlock } from '@/shared/components/admin-form-create-edit-block';
import { AdminFormCreateEditItem } from '@/shared/components/admin-form-create-edit-item';
import {
	productNameValidation,
	textValidation,
} from '@/shared/lib/input-validations';
import { InputMui } from '@/shared/ui/components/input-mui';
import { sxMuiInput } from '@/shared/ui/styles';
import { Control } from 'react-hook-form';

type Props = {
	control: Control<any>;
};

export const MainInfo = ({ control }: Props) => {
	return (
		<AdminFormCreateEditBlock title='Основная информация *'>
			<AdminFormCreateEditItem title='Название'>
				<InputMui
					name='name'
					control={control}
					placeholder='Название категории'
					validation={productNameValidation(true)}
					sx={sxMuiInput}
					size='small'
				/>
			</AdminFormCreateEditItem>
			<AdminFormCreateEditItem title='описание'>
				<InputMui
					name='description'
					control={control}
					placeholder='описание категории'
					validation={textValidation(true)}
					sx={sxMuiInput}
					size='small'
				/>
			</AdminFormCreateEditItem>
		</AdminFormCreateEditBlock>
	);
};
