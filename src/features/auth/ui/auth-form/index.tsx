import {
	emailValidation,
	passwordValidation,
} from '@/shared/lib/input-validations';
import { ButtonCustom } from '@/shared/ui/components/button';
import { InputMui } from '@/shared/ui/components/input-mui';
import { InputMuiPassword } from '@/shared/ui/components/input-mui-password';
import axios from 'axios';
import classNames from 'classnames';
import { useAuth } from '../../model/index';
import styles from './styles.module.scss';

type Props = {
	type: 'login' | 'register';
	closeSideBar: () => void;
};
export const AuthForm = ({ type, closeSideBar }: Props) => {
	const { handleSubmit, control, onSubmit, isPending, error } = useAuth({
		closeSideBar,
		method: type,
	});
	const errorMessage =
		axios.isAxiosError(error) && error.response?.data
			? (error.response.data as { message?: string })?.message ??
			  'Произошла ошибка'
			: 'Ошибка запроса';

	return (
		<form
			noValidate
			className={classNames(styles.form, 'fs-s-3 gap-25')}
			aria-disabled={isPending}
			onSubmit={handleSubmit(onSubmit)}
		>
			{error && (
				<span className={classNames(styles.error, 'error fs-s-2')}>
					{errorMessage}
				</span>
			)}
			<InputMui
				placeholder='email'
				name='email'
				control={control}
				variant='standard'
				validation={emailValidation(true)}
			/>
			<InputMuiPassword
				control={control}
				name='password'
				placeholder='пароль'
				variant='standard'
				validation={passwordValidation(true)}
			/>
			<ButtonCustom
				type='submit'
				fullWidth={true}
				size='l'
				className='mt-10'
				disabled={isPending}
				isLoading={isPending}
			>
				{type === 'login' ? 'Войти' : 'Зарегистрироваться'}
			</ButtonCustom>
		</form>
	);
};
