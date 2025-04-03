import { IFilterReviewsInst } from '@/entities/reviews-inst/types/forms/admin-filters';
import { AdminReviewsInstFilter } from '@/features/admin-filters/admin-reviews-inst-filters';
import { AdminToolbar } from '@/shared/components/admin-toolbar';
import { getRouteAdminReviewInstagramCreate } from '@/shared/constants/router';
import { ButtonCustom } from '@/shared/ui/components/button';
type Props = {
	disabled: boolean;
	formParams?: IFilterReviewsInst;
};

export const AdminToolbarReviewsInst = ({ disabled, formParams }: Props) => {
	return (
		<AdminToolbar
			filterAction={
				<AdminReviewsInstFilter disabled={disabled} formParams={formParams} />
			}
			otherActions={
				<ButtonCustom
					link={getRouteAdminReviewInstagramCreate()}
					size='s'
					contain={true}
					mode='admin'
				>
					создать новый отзыв
				</ButtonCustom>
			}
		/>
	);
};
