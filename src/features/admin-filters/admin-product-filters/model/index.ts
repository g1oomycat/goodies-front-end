import { getAllCategories } from '@/entities/category/model/public/get-all';
import { IProductsFilter } from '@/entities/product';

import { useQuery } from '@/shared/hooks/useQuery';
import { IOptionSelectMui } from '@/shared/types/options-select-mui';

import { SubmitHandler, useForm } from 'react-hook-form';
type Props = {
	formParams?: IProductsFilter;
	setIsVisibleFilters: (isVisibleFilters: boolean) => void;
};
export const useSearchAndFilterProductAdmin = ({
	formParams,
	setIsVisibleFilters,
}: Props) => {
	const { createQuery, resetQuery } = useQuery();

	const defaultValues: IProductsFilter = {
		name: formParams?.name ?? '',
		categoryId: formParams?.categoryId ?? '',
		isLowStock: formParams?.isLowStock ?? false,
	};
	const { handleSubmit, control, reset } = useForm<IProductsFilter>({
		mode: 'onBlur',
		defaultValues: formParams,
	});

	//изменение квери при отправк формы
	const onSubmit: SubmitHandler<IProductsFilter> = submitData => {
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
	//список категорий для селекта
	const { data: categoriesData } = getAllCategories({ limit: 0 });
	const optionsSelect: IOptionSelectMui =
		categoriesData?.result.map(category => ({
			id: category.id,
			label: category.name,
		})) || [];

	return {
		handleSubmit,
		control,
		onSubmit,
		optionsSelect,
		resetAndClearFilters,
	};
};
