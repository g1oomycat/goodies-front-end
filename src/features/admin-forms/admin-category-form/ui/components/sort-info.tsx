import { AdminFormCreateEditBlock } from '@/shared/components/admin-form-create-edit-block';
import { AdminFormCreateEditItem } from '@/shared/components/admin-form-create-edit-item';
import { numberValidation } from '@/shared/lib/input-validations';
import { InputMui } from '@/shared/ui/components/input-mui';
import { sxMuiInput } from '@/shared/ui/styles';
import { Control } from 'react-hook-form';

type Props = {
	control: Control<any>;
};

export const SortInfo = ({ control }: Props) => {
	return (
		<AdminFormCreateEditBlock title='сортировка'>
			<AdminFormCreateEditItem title=''>
				<InputMui
					name='numberSort'
					control={control}
					placeholder='Создается автоматически. Сортировка по возрастанию.'
					validation={numberValidation(false, 0)}
					sx={sxMuiInput}
					size='small'
					type='number'
				/>
			</AdminFormCreateEditItem>
		</AdminFormCreateEditBlock>
	);
};
