import { AdminFormCreateEditBlock } from '@/shared/components/admin-form-create-edit-block';
import { AdminFormCreateEditItem } from '@/shared/components/admin-form-create-edit-item';
import { textValidation } from '@/shared/lib/input-validations';
import { InputMuiColorPicker } from '@/shared/ui/components/input-mui-color-picker';
import { sxMuiInput } from '@/shared/ui/styles';
import { Control } from 'react-hook-form';

type Props = {
	control: Control<any>;
};

export const AppearanceInfo = ({ control }: Props) => {
	return (
		<AdminFormCreateEditBlock title='Внешний вид'>
			<AdminFormCreateEditItem title='Цвет текста'>
				<InputMuiColorPicker
					name='textColor'
					control={control}
					placeholder='По умолчанию - черный цвет'
					validation={textValidation()}
					sx={sxMuiInput}
					size='small'
				/>
			</AdminFormCreateEditItem>
			<AdminFormCreateEditItem title='Цвет текста кнопки'>
				<InputMuiColorPicker
					name='buttonTextColor'
					control={control}
					placeholder='По умолчанию - белый цвет'
					validation={textValidation()}
					sx={sxMuiInput}
					size='small'
				/>
			</AdminFormCreateEditItem>
			<AdminFormCreateEditItem title='Бэкграунд кнопки'>
				<InputMuiColorPicker
					name='buttonBG'
					control={control}
					placeholder='По умолчанию - черный цвет'
					validation={textValidation()}
					sx={sxMuiInput}
					size='small'
				/>
			</AdminFormCreateEditItem>
		</AdminFormCreateEditBlock>
	);
};
