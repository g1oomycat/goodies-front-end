import { IProductsFilter } from '@/entities/product';
import { AdminProductsFilter } from '@/features/admin-filters';
import { AdminToolbar } from '@/shared/components/admin-toolbar';
import { getRouteAdminProductCreate } from '@/shared/constants/router';
import { ButtonCustom } from '@/shared/ui/components/button';

type Props = {
	disabled: boolean;
	formParams?: IProductsFilter;
};

export const AdminToolbarProduct = ({ disabled, formParams }: Props) => {
	return (
		<AdminToolbar
			filterAction={
				<AdminProductsFilter disabled={disabled} formParams={formParams} />
			}
			otherActions={
				<ButtonCustom
					link={getRouteAdminProductCreate()}
					size='s'
					contain={true}
					mode='admin'
				>
					создать новый товар
				</ButtonCustom>
			}
		/>
	);
};
