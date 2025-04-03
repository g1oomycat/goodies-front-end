import { formatDateTimeLong } from '@/shared/lib/format-date';
import { AdminRightFormCreateEditItem } from '../admin-right-form-create-edit-item';

type Props = {
	createdAt: string;
	updatedAt: string;
};

export const AdminFormCreateAndRefreshInfo = ({
	createdAt,
	updatedAt,
}: Props) => {
	return (
		<AdminRightFormCreateEditItem
			title='создание и обновление'
			value={{
				items: [
					{
						key: 'дата создания',
						value: formatDateTimeLong(createdAt),
					},
					{
						key: 'дата обновления',
						value: formatDateTimeLong(updatedAt),
					},
				],
			}}
		/>
	);
};
