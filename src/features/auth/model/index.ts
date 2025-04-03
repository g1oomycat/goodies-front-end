import { IAuthForm, authUser } from '@/entities/auth';

import { SubmitHandler, useForm } from 'react-hook-form';

type Props = {
	closeSideBar: () => void;
	method: 'login' | 'register';
};

export const useAuth = ({ closeSideBar, method }: Props) => {
	const { handleSubmit, control, reset } = useForm<IAuthForm>({
		mode: 'onChange',
		defaultValues: {
			email: '',
			password: '',
		},
	});
	const { mutateAsync, error, isPending } = authUser(method);

	const onSubmit: SubmitHandler<IAuthForm> = async data => {
		try {
			await mutateAsync(data);
			reset();
			closeSideBar();
		} catch (_) {}
	};

	return {
		handleSubmit,
		control,
		error,
		onSubmit,
		isPending,
	};
};
