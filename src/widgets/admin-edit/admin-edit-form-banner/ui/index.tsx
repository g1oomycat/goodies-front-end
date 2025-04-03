import { IBannerResponse } from '@/entities/banner';
import { AdminDeleteBannerButton } from '@/features/admin-delete/admin-delete-banner';
import { AdminBannerForm } from '@/features/admin-forms/admin-banner-form';
import { AdminFormCreateEditSkeleton } from '@/shared/components/admin-create-edit-form-container/skeleton';

type Props = {
	data?: IBannerResponse;
};

export const AdminEditFormBanner = ({ data }: Props) => {
	return (
		<>
			{!data ? (
				<AdminFormCreateEditSkeleton />
			) : (
				<AdminBannerForm
					data={data}
					actionDelete={<AdminDeleteBannerButton id={data.id} />}
				/>
			)}
		</>
	);
};
