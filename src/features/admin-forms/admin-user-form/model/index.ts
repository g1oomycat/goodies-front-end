'use client';

import {
	createUserAdmin,
	EnumUserGender,
	EnumUserRole,
	IUsersForm,
	IUsersResponse,
	updateUserAdmin,
} from '@/entities/user';
import { formatDateLong } from '@/shared/lib/format-date';

import { SubmitHandler, useForm } from 'react-hook-form';

type Props = {
	data?: IUsersResponse;
};

export const useCreateOrEditUserAdmin = ({ data }: Props) => {
	// Инициализируем форму с начальными значениями (если редактирование — берём из `data`)

	const { handleSubmit, control, reset } = useForm<IUsersForm>({
		mode: 'onChange',
		defaultValues: {
			firstName: data?.firstName ?? '',
			lastName: data?.lastName ?? '',
			surName: data?.surName ?? '',
			address: data?.address ?? '',
			dateOfBirth: data?.dateOfBirth ? formatDateLong(data.dateOfBirth) : '',
			email: data?.email ?? '',
			gender: data?.gender ?? EnumUserGender.FEMALE,
			phone: data?.phone ?? '',
			role: data?.role ?? EnumUserRole.ADMIN,
			password: '',
		},
	});

	// API-хуки для создания и обновления продукта
	const { mutateAsync: mutateAsyncUsers, isPending: isPendingUsers } =
		createUserAdmin();
	const {
		mutateAsync: mutateAsyncUpdateUsers,
		isPending: isPendingUpdateUsers,
	} = updateUserAdmin(data?.id ?? '');

	// Функция обработки формы
	const onSubmit: SubmitHandler<IUsersForm> = async submitData => {
		console.log(submitData);

		// Определяем, создаем товар или обновляем
		try {
			if (data) {
				await mutateAsyncUpdateUsers({
					...submitData,
					password:
						submitData.password === '' && data
							? undefined
							: submitData.password,
				});
			} else {
				await mutateAsyncUsers(submitData);
			}
		} catch (error) {
			return; // Ошибка при создании/обновлении — прерываем выполнение
		}

		// Если это создание товара, сбрасываем форму
		if (!data) {
			reset({
				password: '',
				firstName: '',
				lastName: '',
				surName: '',
				address: '',
				dateOfBirth: '',
				email: '',
				gender: EnumUserGender.FEMALE,
				phone: '',
				role: EnumUserRole.ADMIN,
			});
		}
	};

	return {
		handleSubmit,
		control,
		onSubmit,

		isPending: isPendingUsers || isPendingUpdateUsers,
	};
};
