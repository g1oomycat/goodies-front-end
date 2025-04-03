import {
	EnumUserGender,
	IUsersResponse,
	IUsersUpdate,
	updateUserSelf,
} from '@/entities/user';
import { formatDateLong } from '@/shared/lib/format-date';
import { SubmitHandler, useForm } from 'react-hook-form';

type IUsersUpdateForm = IUsersUpdate & {
	accept?: boolean;
};

export const useUpdateUserForm = (data: IUsersResponse) => {
	const { mutate, error, isPending } = updateUserSelf();

	const { handleSubmit, control } = useForm<IUsersUpdateForm>({
		mode: 'onBlur',
		defaultValues: {
			accept: true,
			address: data.address,
			dateOfBirth: data.dateOfBirth ? formatDateLong(data.dateOfBirth) : '',
			email: data.email,
			firstName: data.firstName,
			lastName: data.lastName,
			surName: data.surName,
			phone: data.phone,
			gender: data.gender ? data.gender : EnumUserGender.FEMALE,
		},
	});

	const onSubmit: SubmitHandler<IUsersUpdateForm> = data => {
		const { accept, ...userData } = data; // Убираем accept

		mutate(userData);
	};

	return {
		handleSubmit,
		control,
		error,
		onSubmit,
		isPending,
	};
};
