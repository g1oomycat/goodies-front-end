import { AutocompleteMui } from '@/shared/ui/components/autocomplete-mui';
import { InputMui } from '@/shared/ui/components/input-mui';
import { InputMuiSearch } from '@/shared/ui/components/input-mui-search';

import { IFilterReviewsInst } from '@/entities/reviews-inst/types/forms/admin-filters';

import { AdminDropdownFilters } from '@/shared/components/admin-dropdown-filters';
import { AdminDropdownFiltersItem } from '@/shared/components/admin-dropdown-filters-item';
import { optionYesNoNone } from '@/shared/constants/option-yes-no-none';
import { useClickOutside } from '@/shared/hooks/useClickOutside';
import { ButtonCustom } from '@/shared/ui/components/button';
import { FilterIcon } from '@/shared/ui/icons/filter';
import { FilterOffIcon } from '@/shared/ui/icons/filter-off';
import { sxAutocompletePopper } from '@/shared/ui/styles/mui/sx-autocomplete-popper';
import { sxMuiInput } from '@/shared/ui/styles/mui/sx-input';
import { useState } from 'react';
import { useSearchAndFilterReviewsInstAdmin } from '../model';
import styles from './styles.module.scss';

type Props = {
	disabled: boolean;
	formParams?: IFilterReviewsInst;
};
export const AdminReviewsInstFilter = ({ disabled, formParams }: Props) => {
	const [isVisibleFilters, setIsVisibleFilters] = useState(false);
	const { control, handleSubmit, onSubmit, resetAndClearFilters } =
		useSearchAndFilterReviewsInstAdmin({
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
						name={'nick'}
						placeholder={'Поиск по никнейму'}
						sx={sxMuiInput}
					/>
				</div>
				<AdminDropdownFilters
					isVisible={isVisibleFilters}
					reset={resetAndClearFilters}
				>
					<AdminDropdownFiltersItem title='Никнейм'>
						<InputMui
							size='small'
							control={control}
							name={'nick'}
							placeholder={'Никнейм'}
							sx={sxMuiInput}
						/>
					</AdminDropdownFiltersItem>
					<AdminDropdownFiltersItem title='Имя'>
						<InputMui
							size='small'
							control={control}
							name={'name'}
							placeholder={'Имя'}
							sx={sxMuiInput}
						/>
					</AdminDropdownFiltersItem>

					<AdminDropdownFiltersItem title='Активность'>
						<AutocompleteMui
							size='small'
							control={control}
							name={'isActive'}
							placeholder={'Активность'}
							options={optionYesNoNone}
							sx={sxMuiInput}
							sxPopper={sxAutocompletePopper}
						/>
					</AdminDropdownFiltersItem>
				</AdminDropdownFilters>
			</form>
			<div>
				<ButtonCustom
					mode='admin'
					size='s'
					colorType='primary'
					contain={true}
					onClick={() => setIsVisibleFilters(prev => !prev)}
					// ref={dropdownRef}
				>
					{isVisibleFilters ? <FilterOffIcon /> : <FilterIcon />}
				</ButtonCustom>
			</div>
		</div>
	);
};
