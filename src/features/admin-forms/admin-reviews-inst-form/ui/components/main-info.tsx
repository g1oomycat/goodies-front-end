import { AdminFormCreateEditBlock } from '@/shared/components/admin-form-create-edit-block';
import { AdminFormCreateEditItem } from '@/shared/components/admin-form-create-edit-item';
import { textValidation } from '@/shared/lib/input-validations';
import { InputMui } from '@/shared/ui/components/input-mui';
import { sxMuiInput } from '@/shared/ui/styles';
import { Control } from 'react-hook-form';

type Props = {
	control: Control<any>;
};

export const MainInfo = ({ control }: Props) => {
	return (
		<AdminFormCreateEditBlock title='Основная информация *'>
			<AdminFormCreateEditItem title='Никнейм'>
				<InputMui
					name='nick'
					control={control}
					placeholder='Никнейм инсты'
					validation={textValidation(true)}
					sx={sxMuiInput}
					size='small'
				/>
			</AdminFormCreateEditItem>
			<AdminFormCreateEditItem title='Имя'>
				<InputMui
					name='name'
					control={control}
					placeholder='Имя покупателя'
					validation={textValidation()}
					sx={sxMuiInput}
					size='small'
				/>
			</AdminFormCreateEditItem>
		</AdminFormCreateEditBlock>
	);
};
