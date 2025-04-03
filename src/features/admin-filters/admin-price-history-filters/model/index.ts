import { IFilterPriceHistory } from '@/entities/price-history/types/forms/admin-filters';
import { useQuery } from '@/shared/hooks/useQuery';

import { SubmitHandler, useForm } from 'react-hook-form';
type Props = {
	formParams?: IFilterPriceHistory;
};
export const useSearchAndFilterPriceHistoryAdmin = ({ formParams }: Props) => {
	const { createQuery, resetQuery } = useQuery();

	const { handleSubmit, control, reset } = useForm<IFilterPriceHistory>({
		mode: 'onBlur',
		defaultValues: formParams,
	});

	//изменение квери при отправк формы
	const onSubmit: SubmitHandler<IFilterPriceHistory> = submitData => {
		createQuery({
			paramsToUpdate: { ...submitData, page: '', limit: '' },
		});
	};
	//удаляем фильтры и также очищаем поля
	const resetAndClearFilters = () => {
		reset();
		resetQuery();
	};

	return {
		handleSubmit,
		control,
		onSubmit,
		resetAndClearFilters,
	};
};
