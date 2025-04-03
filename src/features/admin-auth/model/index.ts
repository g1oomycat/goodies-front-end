import { AdminAuthUser, IAuthForm } from '@/entities/auth';
import { getRouteAdminOrders } from '@/shared/constants/router';
import { AxiosError } from 'axios';
import { useRouter, useSearchParams } from 'next/navigation';

import { SubmitHandler, useForm } from 'react-hook-form';

export const useAdminAuth = () => {
	const { push } = useRouter();

	const searchParams = useSearchParams();
	const returnUrl = searchParams.get('returnUrl') ?? getRouteAdminOrders();

	const { handleSubmit, control, reset } = useForm<IAuthForm>({
		mode: 'onChange',
		defaultValues: {
			email: '',
			password: '',
		},
	});
	const { mutateAsync, error, isPending } = AdminAuthUser();

	const onSubmit: SubmitHandler<IAuthForm> = async data => {
		try {
			await mutateAsync(data);
			reset();

			// Обновляем URL и перенаправляем
			window.history.pushState(null, '', returnUrl);
			window.history.replaceState(null, '', returnUrl);
			window.location.replace(returnUrl);
			push(returnUrl);
		} catch (_) {}
	};

	return {
		handleSubmit,
		control,
		error: error as AxiosError,
		onSubmit,
		isPending,
	};
};
