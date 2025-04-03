import { IFilterPriceHistory } from '@/entities/price-history/types/forms/admin-filters';
import { AdminPriceHistoryFilter } from '@/features/admin-filters/admin-price-history-filters/ui';
import { AdminToolbar } from '@/shared/components/admin-toolbar';
type Props = {
	disabled: boolean;
	formParams?: IFilterPriceHistory;
};

export const AdminToolbarPriceHistory = ({ disabled, formParams }: Props) => {
	return (
		<AdminToolbar
			filterAction={
				<AdminPriceHistoryFilter disabled={disabled} formParams={formParams} />
			}
		/>
	);
};
