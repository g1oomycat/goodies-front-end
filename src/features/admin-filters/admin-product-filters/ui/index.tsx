import { AdminDropdownFiltersItem } from '@/shared/components/admin-dropdown-filters-item';

import { IProductsFilter } from '@/entities/product';
import { AdminDropdownFilters } from '@/shared/components/admin-dropdown-filters';
import { useClickOutside } from '@/shared/hooks/useClickOutside';
import { productNameValidation } from '@/shared/lib/input-validations';
import { AutocompleteMui } from '@/shared/ui/components/autocomplete-mui';
import { ButtonCustom } from '@/shared/ui/components/button';
import { CheckboxMui } from '@/shared/ui/components/checkbox';
import { InputMui } from '@/shared/ui/components/input-mui';
import { InputMuiSearch } from '@/shared/ui/components/input-mui-search';
import { FilterIcon } from '@/shared/ui/icons/filter';
import { FilterOffIcon } from '@/shared/ui/icons/filter-off';
import { sxAutocompletePopper } from '@/shared/ui/styles/mui/sx-autocomplete-popper';
import { sxCheckbox } from '@/shared/ui/styles/mui/sx-checkbox';
import { sxMuiInput } from '@/shared/ui/styles/mui/sx-input';
import { useState } from 'react';
import { useSearchAndFilterProductAdmin } from '../model';
import styles from './styles.module.scss';

type Props = {
	disabled: boolean;
	formParams?: IProductsFilter;
};
export const AdminProductsFilter = ({ disabled, formParams }: Props) => {
	const [isVisibleFilters, setIsVisibleFilters] = useState(false);
	const {
		control,
		handleSubmit,
		onSubmit,
		optionsSelect,
		resetAndClearFilters,
	} = useSearchAndFilterProductAdmin({
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
						name={'name'}
						placeholder={'Поиск'}
						validation={productNameValidation(false)}
						sx={sxMuiInput}
					/>
				</div>
				<AdminDropdownFilters
					isVisible={isVisibleFilters}
					reset={resetAndClearFilters}
				>
					<AdminDropdownFiltersItem title='Название'>
						<InputMui
							size='small'
							control={control}
							name={'name'}
							placeholder={'Название'}
							validation={productNameValidation(false)}
							sx={sxMuiInput}
						/>
					</AdminDropdownFiltersItem>
					<AdminDropdownFiltersItem title='Категория'>
						<AutocompleteMui
							size='small'
							control={control}
							name={'categoryId'}
							placeholder={'Название'}
							options={optionsSelect}
							sx={sxMuiInput}
							sxPopper={sxAutocompletePopper}
						/>
					</AdminDropdownFiltersItem>
					<AdminDropdownFiltersItem title=''>
						<CheckboxMui
							control={control}
							name={'isLowStock'}
							label={<p className='fs-s-2'>только активные товары</p>}
							sx={sxCheckbox}
							position='center'
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
					// ref={dropdownRef}
				>
					{isVisibleFilters ? <FilterOffIcon /> : <FilterIcon />}
				</ButtonCustom>
			</div>
		</div>
	);
};
