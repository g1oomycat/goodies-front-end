import { IReviewsInstResponse } from '@/entities/reviews-inst';
import { AdminDeleteReviewInstButton } from '@/features/admin-delete/admin-delete-review-inst';
import { AdminReviewsInstForm } from '@/features/admin-forms/admin-reviews-inst-form';

import { AdminFormCreateEditSkeleton } from '@/shared/components/admin-create-edit-form-container/skeleton';

type Props = {
	data?: IReviewsInstResponse;
};

export const AdminEditFormReviewInst = ({ data }: Props) => {
	return (
		<>
			{!data ? (
				<AdminFormCreateEditSkeleton />
			) : (
				<AdminReviewsInstForm
					data={data}
					actionDelete={<AdminDeleteReviewInstButton id={data.id} />}
				/>
			)}
		</>
	);
};
