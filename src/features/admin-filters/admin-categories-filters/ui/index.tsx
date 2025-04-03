import { productNameValidation } from '@/shared/lib/input-validations';
import { InputMuiSearch } from '@/shared/ui/components/input-mui-search';

import { IFilterCategories } from '@/entities/category';
import { sxMuiInput } from '@/shared/ui/styles/mui/sx-input';
import { useSearchAndFilterCategoriesAdmin } from '../model';
import styles from './styles.module.scss';

type Props = {
	disabled: boolean;
	formParams?: IFilterCategories;
};
export const AdminCategoriesFilter = ({ disabled, formParams }: Props) => {
	const { control, handleSubmit, onSubmit, resetAndClearFilters } =
		useSearchAndFilterCategoriesAdmin({
			formParams,
		});

	return (
		<div className={styles.searh}>
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
			</form>
		</div>
	);
};
