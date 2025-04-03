import { deliveryMethodsOptions } from '@/entities/orders';
import { AdminFormCreateEditBlock } from '@/shared/components/admin-form-create-edit-block';
import { AdminFormCreateEditItem } from '@/shared/components/admin-form-create-edit-item';
import {
	addressValidation,
	dateValidation,
	requiredValidation,
} from '@/shared/lib/input-validations';
import { AutocompleteMui } from '@/shared/ui/components/autocomplete-mui';
import { InputMuiMask } from '@/shared/ui/components/input-masks-mui';
import { InputMui } from '@/shared/ui/components/input-mui';
import { sxAutocompletePopper, sxMuiInput } from '@/shared/ui/styles';
import { Control } from 'react-hook-form';

type Props = { control: Control<any> };

export const DeliveryInfo = ({ control }: Props) => {
	return (
		<AdminFormCreateEditBlock title='Доставка'>
			<AdminFormCreateEditItem title='метод доставки *'>
				<AutocompleteMui
					name='deliveryMethod'
					options={deliveryMethodsOptions}
					control={control}
					placeholder='метод доставки'
					validation={requiredValidation}
					sx={sxMuiInput}
					sxPopper={sxAutocompletePopper}
					size='small'
				/>
			</AdminFormCreateEditItem>
			<AdminFormCreateEditItem title='Адрес'>
				<InputMui
					name='address'
					control={control}
					placeholder='город, улица, дом, квартира'
					validation={addressValidation(true)}
					sx={sxMuiInput}
					size='small'
				/>
			</AdminFormCreateEditItem>
			<AdminFormCreateEditItem title='дата доставки'>
				<InputMuiMask
					name='expectedDate'
					type='date'
					control={control}
					placeholder='по умолчанию через неделю'
					validation={dateValidation(false, 'greater')}
					sx={sxMuiInput}
					size='small'
				/>
			</AdminFormCreateEditItem>
		</AdminFormCreateEditBlock>
	);
};
