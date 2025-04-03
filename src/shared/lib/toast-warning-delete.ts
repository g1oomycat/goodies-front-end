import { toast } from 'sonner';

type Props<T extends string | string[]> = {
	entity: string;

	onDelete: (id: T) => Promise<void>;
	id: T;
};

export function toastWarningDelete<T extends string | string[]>({
	entity,
	onDelete,
	id,
}: Props<T>) {
	// Приводим id к нужному типу в зависимости от count

	toast.warning(`Удалить ${entity}???`, {
		action: {
			label: 'Удалить',
			onClick: async () => {
				await onDelete(id);
			},
		},
		closeButton: true,
	});
}
