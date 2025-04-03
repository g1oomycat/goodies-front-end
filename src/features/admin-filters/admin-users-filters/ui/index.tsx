import { nameValidation } from '@/shared/lib/input-validations';
import { InputMui } from '@/shared/ui/components/input-mui';
import { InputMuiSearch } from '@/shared/ui/components/input-mui-search';

import { IFilterUsers } from '@/entities/user';
import { AdminDropdownFilters } from '@/shared/components/admin-dropdown-filters';
import { AdminDropdownFiltersItem } from '@/shared/components/admin-dropdown-filters-item';
import { useClickOutside } from '@/shared/hooks/useClickOutside';
import { AutocompleteMui } from '@/shared/ui/components/autocomplete-mui';
import { ButtonCustom } from '@/shared/ui/components/button';
import { FilterIcon } from '@/shared/ui/icons/filter';
import { FilterOffIcon } from '@/shared/ui/icons/filter-off';
import { sxAutocompletePopper } from '@/shared/ui/styles/mui/sx-autocomplete-popper';
import { sxMuiInput } from '@/shared/ui/styles/mui/sx-input';
import { useState } from 'react';
import { useSearchAndFilterUsersAdmin } from '../model';
import styles from './styles.module.scss';

type Props = {
	disabled: boolean;
	formParams?: IFilterUsers;
};
export const AdminUsersFilter = ({ disabled, formParams }: Props) => {
	const [isVisibleFilters, setIsVisibleFilters] = useState(false);
	const { control, handleSubmit, onSubmit, resetAndClearFilters, roleOptions } =
		useSearchAndFilterUsersAdmin({
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
						name={'firstName'}
						placeholder={'Поиск'}
						validation={nameValidation(false)}
						sx={sxMuiInput}
					/>
				</div>
				<AdminDropdownFilters
					isVisible={isVisibleFilters}
					reset={resetAndClearFilters}
				>
					<AdminDropdownFiltersItem title='Имя'>
						<InputMui
							size='small'
							control={control}
							name={'firstName'}
							placeholder={'Имя'}
							validation={nameValidation(false)}
							sx={sxMuiInput}
						/>
					</AdminDropdownFiltersItem>
					<AdminDropdownFiltersItem title='Фамилия'>
						<InputMui
							size='small'
							control={control}
							name={'firstName'}
							placeholder={'Фамилия'}
							validation={nameValidation(false)}
							sx={sxMuiInput}
						/>
					</AdminDropdownFiltersItem>
					<AdminDropdownFiltersItem title='Почта'>
						<InputMui
							size='small'
							control={control}
							name={'email'}
							placeholder={'Почта'}
							validation={nameValidation(false)}
							sx={sxMuiInput}
						/>
					</AdminDropdownFiltersItem>
					<AdminDropdownFiltersItem title='Телефон'>
						<InputMui
							size='small'
							control={control}
							name={'phone'}
							placeholder={'Телефон'}
							validation={nameValidation(false)}
							sx={sxMuiInput}
						/>
					</AdminDropdownFiltersItem>
					<AdminDropdownFiltersItem title='Роль'>
						<AutocompleteMui
							size='small'
							control={control}
							name={'role'}
							placeholder={'Роль'}
							validation={nameValidation(false)}
							options={roleOptions}
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
