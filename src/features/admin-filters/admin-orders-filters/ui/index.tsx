import {
	emailValidation,
	telephoneValidation,
} from '@/shared/lib/input-validations';
import { AutocompleteMui } from '@/shared/ui/components/autocomplete-mui';
import { InputMui } from '@/shared/ui/components/input-mui';
import { InputMuiSearch } from '@/shared/ui/components/input-mui-search';

import {
	deliveryMethodsOptions,
	IFilterOrders,
	orderStatusOptions,
	paymentMethodsOptions,
} from '@/entities/orders';

import { AdminDropdownFilters } from '@/shared/components/admin-dropdown-filters';
import { AdminDropdownFiltersItem } from '@/shared/components/admin-dropdown-filters-item';
import { useClickOutside } from '@/shared/hooks/useClickOutside';
import { ButtonCustom } from '@/shared/ui/components/button';

import { InputMuiMask } from '@/shared/ui/components/input-masks-mui';
import { FilterIcon } from '@/shared/ui/icons/filter';
import { FilterOffIcon } from '@/shared/ui/icons/filter-off';
import { sxAutocompletePopper } from '@/shared/ui/styles/mui/sx-autocomplete-popper';
import { sxMuiInput } from '@/shared/ui/styles/mui/sx-input';
import { useState } from 'react';
import { useSearchAndFilterOrdersAdmin } from '../model';
import styles from './styles.module.scss';

type Props = {
	disabled: boolean;
	formParams?: IFilterOrders;
};
export const AdminOrdersFilter = ({ disabled, formParams }: Props) => {
	const [isVisibleFilters, setIsVisibleFilters] = useState(false);
	const {
		control,
		handleSubmit,
		onSubmit,

		resetAndClearFilters,
	} = useSearchAndFilterOrdersAdmin({
		formParams,
		setIsVisibleFilters,
	});
	const dropdownRef = useClickOutside(
		() => setIsVisibleFilters(false),
		'MuiAutocomplete-popper'
	);
	return (
		<div className={styles.searh} ref={dropdownRef}>
			<form
				noValidate
				className={styles.form}
				aria-disabled={disabled}
				onSubmit={handleSubmit(onSubmit)}
			>
				<div className={styles.serach_block}>
					<InputMuiSearch
						size='small'
						control={control}
						name={'publicId'}
						placeholder={'Поиск по публичному id'}
						sx={sxMuiInput}
					/>
				</div>
				<AdminDropdownFilters
					isVisible={isVisibleFilters}
					reset={resetAndClearFilters}
				>
					<AdminDropdownFiltersItem title='Публичный Id'>
						<InputMui
							size='small'
							control={control}
							name={'publicId'}
							placeholder={'Публичный Id'}
							sx={sxMuiInput}
						/>
					</AdminDropdownFiltersItem>
					<AdminDropdownFiltersItem title='Id пользователя'>
						<InputMui
							size='small'
							control={control}
							name={'userId'}
							placeholder={'Id пользователя'}
							sx={sxMuiInput}
						/>
					</AdminDropdownFiltersItem>
					<AdminDropdownFiltersItem title='Почта'>
						<InputMui
							size='small'
							control={control}
							name={'email'}
							placeholder={'Почта'}
							validation={emailValidation(false)}
							sx={sxMuiInput}
						/>
					</AdminDropdownFiltersItem>
					<AdminDropdownFiltersItem title='Телефон'>
						<InputMuiMask
							type='phone'
							size='small'
							control={control}
							name={'phone'}
							placeholder={'Телефон'}
							validation={telephoneValidation(false)}
							sx={sxMuiInput}
						/>
					</AdminDropdownFiltersItem>
					<AdminDropdownFiltersItem title='Статус'>
						<AutocompleteMui
							size='small'
							control={control}
							name={'status'}
							placeholder={'Статус'}
							options={orderStatusOptions}
							sx={sxMuiInput}
							sxPopper={sxAutocompletePopper}
						/>
					</AdminDropdownFiltersItem>
					<AdminDropdownFiltersItem title='Оплата'>
						<AutocompleteMui
							size='small'
							control={control}
							name={'paymentMethod'}
							placeholder={'Оплата'}
							options={paymentMethodsOptions}
							sx={sxMuiInput}
							sxPopper={sxAutocompletePopper}
						/>
					</AdminDropdownFiltersItem>
					<AdminDropdownFiltersItem title='Доставка'>
						<AutocompleteMui
							size='small'
							control={control}
							name={'deliveryMethod'}
							placeholder={'Доставка'}
							options={deliveryMethodsOptions}
							sx={sxMuiInput}
							sxPopper={sxAutocompletePopper}
						/>
					</AdminDropdownFiltersItem>
				</AdminDropdownFilters>
			</form>
			<div>
				<ButtonCustom
					size='s'
					colorType='primary'
					contain={true}
					onClick={() => setIsVisibleFilters(prev => !prev)}
					mode='admin'
				>
					{isVisibleFilters ? <FilterOffIcon /> : <FilterIcon />}
				</ButtonCustom>
			</div>
		</div>
	);
};
