import { IOrdersResponse, paymentMethodsOptions } from '@/entities/orders';
import { AdminFormCreateEditBlock } from '@/shared/components/admin-form-create-edit-block';
import { AdminFormCreateEditItem } from '@/shared/components/admin-form-create-edit-item';
import { DotLoader } from '@/shared/kit/dot-loader';
import { formatCurrency, formatPercentage } from '@/shared/lib/format-сurrency';
import {
	numberValidation,
	requiredValidation,
} from '@/shared/lib/input-validations';
import { AutocompleteMui } from '@/shared/ui/components/autocomplete-mui';
import { InputMui } from '@/shared/ui/components/input-mui';
import { sxAutocompletePopper, sxMuiInput } from '@/shared/ui/styles';
import { Control } from 'react-hook-form';

type Props = { control: Control<any>; data?: IOrdersResponse };

export const PaymentInfo = ({ control, data }: Props) => {
	return (
		<AdminFormCreateEditBlock title='Стоимость'>
			<AdminFormCreateEditItem title='способ оплаты *'>
				<AutocompleteMui
					name='paymentMethod'
					options={paymentMethodsOptions}
					control={control}
					placeholder='способ оплаты'
					validation={requiredValidation}
					sx={sxMuiInput}
					sxPopper={sxAutocompletePopper}
					size='small'
				/>
			</AdminFormCreateEditItem>
			<AdminFormCreateEditItem title='Процентная скидка'>
				<InputMui
					name='percentDiscount'
					control={control}
					placeholder='Процентная скидка применяется первой'
					validation={numberValidation()}
					type='number'
					sx={sxMuiInput}
					size='small'
				/>
			</AdminFormCreateEditItem>
			<AdminFormCreateEditItem title='ручная скидка'>
				<InputMui
					name='manualDiscount'
					control={control}
					placeholder='ручная скидка'
					type='number'
					validation={numberValidation()}
					sx={sxMuiInput}
					size='small'
				/>
			</AdminFormCreateEditItem>
			{!!data && (
				<AdminFormCreateEditItem title=''>
					<DotLoader
						items={[
							{
								key: 'начальная сумма',
								value: formatCurrency(data.originalTotal - data.discount),
							},
							{
								key: 'процентная скидка',
								value: formatPercentage(data.percentDiscount),
							},
							{
								key: 'ручная скидка',
								value: formatCurrency(data.manualDiscount),
							},
							{ key: 'сумма', value: formatCurrency(data.total) },
						]}
					/>
				</AdminFormCreateEditItem>
			)}
		</AdminFormCreateEditBlock>
	);
};
