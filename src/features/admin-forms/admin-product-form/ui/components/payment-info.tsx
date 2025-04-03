import { IProductsResponse } from '@/entities/product';
import { AdminFormCreateEditBlock } from '@/shared/components/admin-form-create-edit-block';
import { AdminFormCreateEditItem } from '@/shared/components/admin-form-create-edit-item';
import { DotLoader } from '@/shared/kit/dot-loader';
import { formatDateTimeLong } from '@/shared/lib/format-date';
import { formatCurrency, formatPercentage } from '@/shared/lib/format-сurrency';
import { numberValidation } from '@/shared/lib/input-validations';
import { InputMui } from '@/shared/ui/components/input-mui';
import { sxMuiInput } from '@/shared/ui/styles';
import { Control } from 'react-hook-form';

type Props = {
	control: Control<any>;
	data?: IProductsResponse;
};

export const PaymentInfo = ({ control, data }: Props) => {
	return (
		<AdminFormCreateEditBlock title='Торговое предложение *'>
			<AdminFormCreateEditItem title='Стоимость'>
				<InputMui
					name='price'
					control={control}
					placeholder='Стоимость товара'
					validation={numberValidation(true, 0)}
					sx={sxMuiInput}
					size='small'
					type='number'
				/>
			</AdminFormCreateEditItem>
			<AdminFormCreateEditItem title='Остаток'>
				<InputMui
					name='stock'
					control={control}
					placeholder='Остаток товара'
					validation={numberValidation(true, 0)}
					sx={sxMuiInput}
					size='small'
					type='number'
				/>
			</AdminFormCreateEditItem>
			{/* Блок изменения цены — только при редактировании */}
			{!!data?.oldPrice && (
				<AdminFormCreateEditItem title='Изменение цены'>
					<DotLoader
						items={[
							{
								key: 'Старая цена',
								value: formatCurrency(data.oldPrice),
							},
							{
								key: 'Процент изменения',
								value: formatPercentage(data.percentageChange),
							},
							{ key: 'Скидка', value: formatCurrency(data.discount) },
							{
								key: 'Дата изменения цены',
								value: formatDateTimeLong(data.updatedPriceAt),
							},
						]}
					/>
				</AdminFormCreateEditItem>
			)}
		</AdminFormCreateEditBlock>
	);
};
