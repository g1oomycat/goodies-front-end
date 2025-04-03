import { IFilterCategories } from '@/entities/category';
import { useQuery } from '@/shared/hooks/useQuery';

import { SubmitHandler, useForm } from 'react-hook-form';
type Props = {
	formParams?: IFilterCategories;
};
export const useSearchAndFilterCategoriesAdmin = ({ formParams }: Props) => {
	const { createQuery, resetQuery } = useQuery();

	const { handleSubmit, control, reset } = useForm<IFilterCategories>({
		mode: 'onBlur',
		defaultValues: formParams,
	});

	//изменение квери при отправк формы
	const onSubmit: SubmitHandler<IFilterCategories> = submitData => {
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
