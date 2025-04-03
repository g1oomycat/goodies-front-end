import { IFilterOrders } from '@/entities/orders';
import { useQuery } from '@/shared/hooks/useQuery';

import { SubmitHandler, useForm } from 'react-hook-form';
type Props = {
	formParams?: IFilterOrders;
	setIsVisibleFilters: (isVisibleFilters: boolean) => void;
};
export const useSearchAndFilterOrdersAdmin = ({
	formParams,
	setIsVisibleFilters,
}: Props) => {
	const { createQuery, resetQuery } = useQuery();

	const { handleSubmit, control, reset } = useForm<IFilterOrders>({
		mode: 'onChange',
		defaultValues: formParams,
	});

	//изменение квери при отправк формы
	const onSubmit: SubmitHandler<IFilterOrders> = submitData => {
		setIsVisibleFilters(false);
		createQuery({
			paramsToUpdate: { ...submitData, page: '', limit: '' },
		});
	};
	//удаляем фильтры и также очищаем поля
	const resetAndClearFilters = () => {
		reset();
		setIsVisibleFilters(false);
		resetQuery();
	};

	return {
		handleSubmit,
		control,
		onSubmit,
		resetAndClearFilters,
	};
};
