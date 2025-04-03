import { AdminFormCreateEditBlock } from '@/shared/components/admin-form-create-edit-block';
import { AdminFormCreateEditItem } from '@/shared/components/admin-form-create-edit-item';
import { numberValidation } from '@/shared/lib/input-validations';
import { CheckboxMui } from '@/shared/ui/components/checkbox';
import { InputMui } from '@/shared/ui/components/input-mui';
import { sxCheckbox, sxMuiInput } from '@/shared/ui/styles';
import { Control } from 'react-hook-form';

type Props = {
	control: Control<any>;
};

export const ActiveSortInfo = ({ control }: Props) => {
	return (
		<AdminFormCreateEditBlock title='Активность и сортировка'>
			<AdminFormCreateEditItem title='сортировка'>
				<InputMui
					name='position'
					control={control}
					placeholder='Создается автоматически. Сортировка по убыванию.'
					validation={numberValidation(false, 0)}
					sx={sxMuiInput}
					size='small'
					type='number'
				/>
			</AdminFormCreateEditItem>
			<AdminFormCreateEditItem title='' isChildrenInput={false}>
				<CheckboxMui
					control={control}
					name='isActive'
					label='Активность баннера'
					sx={sxCheckbox}
					position='center'
				/>
			</AdminFormCreateEditItem>
		</AdminFormCreateEditBlock>
	);
};
