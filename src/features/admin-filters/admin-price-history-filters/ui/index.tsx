import { productNameValidation } from '@/shared/lib/input-validations';
import { InputMuiSearch } from '@/shared/ui/components/input-mui-search';

import { sxMuiInput } from '@/shared/ui/styles/mui/sx-input';

import { IFilterPriceHistory } from '@/entities/price-history/types/forms/admin-filters';
import { useSearchAndFilterPriceHistoryAdmin } from '../model';
import styles from './styles.module.scss';

type Props = {
	disabled: boolean;
	formParams?: IFilterPriceHistory;
};
export const AdminPriceHistoryFilter = ({ disabled, formParams }: Props) => {
	const { control, handleSubmit, onSubmit, resetAndClearFilters } =
		useSearchAndFilterPriceHistoryAdmin({
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
