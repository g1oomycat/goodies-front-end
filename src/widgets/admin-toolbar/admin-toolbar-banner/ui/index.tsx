import { IBannerFilter } from '@/entities/banner';
import { AdminBannerFilter } from '@/features/admin-filters/admin-banner-filters';
import { AdminToolbar } from '@/shared/components/admin-toolbar';
import { getRouteAdminBannerCreate } from '@/shared/constants/router';
import { ButtonCustom } from '@/shared/ui/components/button';
type Props = {
	disabled: boolean;
	formParams?: IBannerFilter;
};

export const AdminToolbarBanner = ({ disabled, formParams }: Props) => {
	return (
		<AdminToolbar
			filterAction={
				<AdminBannerFilter disabled={disabled} formParams={formParams} />
			}
			otherActions={
				<ButtonCustom
					link={getRouteAdminBannerCreate()}
					size='s'
					contain={true}
					mode='admin'
				>
					создать новый баннер
				</ButtonCustom>
			}
		/>
	);
};
