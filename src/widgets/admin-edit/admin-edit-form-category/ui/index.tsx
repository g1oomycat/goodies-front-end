import { ICategoriesResponse } from '@/entities/category';
import { AdminDeleteCategoryButton } from '@/features/admin-delete/admin-delete-category';
import { AdminCategoryForm } from '@/features/admin-forms/admin-category-form';
import { AdminFormCreateEditSkeleton } from '@/shared/components/admin-create-edit-form-container/skeleton';

type Props = {
	data?: ICategoriesResponse;
};

export const AdminEditFormCategory = ({ data }: Props) => {
	return (
		<>
			{!data ? (
				<AdminFormCreateEditSkeleton />
			) : (
				<AdminCategoryForm
					data={data}
					actionDelete={<AdminDeleteCategoryButton id={data.id} />}
				/>
			)}
		</>
	);
};
