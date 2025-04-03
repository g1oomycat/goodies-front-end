import { IBannerFilter } from '@/entities/banner';
import { useQuery } from '@/shared/hooks/useQuery';

import { SubmitHandler, useForm } from 'react-hook-form';

type Props = {
	formParams?: IBannerFilter;
	setIsVisibleFilters: (isVisibleFilters: boolean) => void;
};
export const useSearchAndFilterBannerAdmin = ({
	formParams,
	setIsVisibleFilters,
}: Props) => {
	const { createQuery, resetQuery } = useQuery();

	const { handleSubmit, control, reset } = useForm<IBannerFilter>({
		mode: 'onChange',
		defaultValues: formParams,
	});

	//изменение квери при отправк формы
	const onSubmit: SubmitHandler<IBannerFilter> = submitData => {
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
