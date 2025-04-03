import { AdminFormCreateEditBlock } from '@/shared/components/admin-form-create-edit-block';
import { AdminFormCreateEditItem } from '@/shared/components/admin-form-create-edit-item';
import { textValidation, urlValidation } from '@/shared/lib/input-validations';
import { InputMui } from '@/shared/ui/components/input-mui';
import { sxMuiInput } from '@/shared/ui/styles';
import { Control } from 'react-hook-form';

type Props = {
	control: Control<any>;
};

export const AdditionalInfo = ({ control }: Props) => {
	return (
		<AdminFormCreateEditBlock title='Дополнительная информация'>
			<AdminFormCreateEditItem title='Описание'>
				<InputMui
					name='description'
					control={control}
					placeholder='Описание баннера'
					validation={textValidation()}
					sx={sxMuiInput}
					size='small'
				/>
			</AdminFormCreateEditItem>
			<AdminFormCreateEditItem title='Ссылка'>
				<InputMui
					name='link'
					control={control}
					placeholder='URL-адрес перехода по баннеру'
					validation={urlValidation()}
					sx={sxMuiInput}
					size='small'
				/>
			</AdminFormCreateEditItem>
		</AdminFormCreateEditBlock>
	);
};
