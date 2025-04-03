import { IFilterCategories } from '@/entities/category';
import { AdminCategoriesFilter } from '@/features/admin-filters/admin-categories-filters/ui';
import { AdminToolbar } from '@/shared/components/admin-toolbar';
import { getRouteAdminCategoryCreate } from '@/shared/constants/router';
import { ButtonCustom } from '@/shared/ui/components/button';
type Props = {
	disabled: boolean;
	formParams?: IFilterCategories;
};

export const AdminToolbarCategories = ({ disabled, formParams }: Props) => {
	return (
		<AdminToolbar
			filterAction={
				<AdminCategoriesFilter disabled={disabled} formParams={formParams} />
			}
			otherActions={
				<ButtonCustom
					link={getRouteAdminCategoryCreate()}
					size='s'
					contain={true}
					mode='admin'
				>
					создать новую категорию
				</ButtonCustom>
			}
		/>
	);
};
