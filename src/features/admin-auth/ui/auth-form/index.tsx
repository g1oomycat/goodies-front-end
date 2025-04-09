import {
	emailValidation,
	passwordValidation,
} from '@/shared/lib/input-validations';
import { ButtonCustom } from '@/shared/ui/components/button';
import { InputMui } from '@/shared/ui/components/input-mui';
import { InputMuiPassword } from '@/shared/ui/components/input-mui-password';
import { sxMuiInput } from '@/shared/ui/styles';
import axios from 'axios';
import classNames from 'classnames';
import { useAdminAuth } from '../../model/index';
import styles from './styles.module.scss';

export const AdminAuthForm = () => {
	const { handleSubmit, control, onSubmit, isPending, error } = useAdminAuth();

	const errorMessage =
		axios.isAxiosError(error) && error.response?.data
			? (error.response.data as { message?: string })?.message ??
			  'Произошла ошибка'
			: 'Ошибка запроса';

	return (
		<form
			noValidate
			className={styles.form}
			aria-disabled={isPending}
			onSubmit={handleSubmit(onSubmit)}
		>
			{error && (
				<span className={classNames(styles.error, 'fs-s-1 low')}>
					{errorMessage}
				</span>
			)}
			<InputMui
				placeholder='email'
				name='email'
				size='medium'
				control={control}
				variant='outlined'
				validation={emailValidation(true)}
				sx={sxMuiInput}
			/>
			<InputMuiPassword
				control={control}
				name='password'
				size='medium'
				placeholder='Пароль'
				validation={passwordValidation(true)}
				variant='outlined'
				sx={sxMuiInput}
			/>
			<ButtonCustom
				type='submit'
				fullWidth={true}
				size='l'
				disabled={isPending}
				isLoading={isPending}
				mode='admin'
			>
				Войти
			</ButtonCustom>
		</form>
	);
};
