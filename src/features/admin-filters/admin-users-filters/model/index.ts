import { getRoleOption, IFilterUsers } from '@/entities/user';
import { useAuthStore } from '@/shared/config/auth-store';
import { useQuery } from '@/shared/hooks/useQuery';

import { SubmitHandler, useForm } from 'react-hook-form';
type Props = {
	formParams?: IFilterUsers;
	setIsVisibleFilters: (isVisibleFilters: boolean) => void;
};
export const useSearchAndFilterUsersAdmin = ({
	formParams,
	setIsVisibleFilters,
}: Props) => {
	const { role } = useAuthStore();
	const { createQuery, resetQuery } = useQuery();

	const { handleSubmit, control, reset } = useForm<IFilterUsers>({
		mode: 'onBlur',
		defaultValues: formParams,
	});

	//изменение квери при отправк формы
	const onSubmit: SubmitHandler<IFilterUsers> = submitData => {
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
	const roleOptions = getRoleOption(role);

	return {
		handleSubmit,
		control,
		onSubmit,
		roleOptions,
		resetAndClearFilters,
	};
};
