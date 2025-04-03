import { IFilterReviewsInst } from '@/entities/reviews-inst/types/forms/admin-filters';
import { useQuery } from '@/shared/hooks/useQuery';
import { SubmitHandler, useForm } from 'react-hook-form';

type Props = {
	formParams?: IFilterReviewsInst;
	setIsVisibleFilters: (isVisibleFilters: boolean) => void;
};
export const useSearchAndFilterReviewsInstAdmin = ({
	formParams,
	setIsVisibleFilters,
}: Props) => {
	const { createQuery, resetQuery } = useQuery();

	const { handleSubmit, control, reset } = useForm<IFilterReviewsInst>({
		mode: 'onChange',
		defaultValues: formParams,
	});

	//изменение квери при отправк формы
	const onSubmit: SubmitHandler<IFilterReviewsInst> = submitData => {
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
