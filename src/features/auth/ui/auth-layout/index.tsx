import { ButtonCustom } from '@/shared/ui/components/button';
import classNames from 'classnames';
import { ReactNode } from 'react';
import styles from './styles.module.scss';

type Props = {
	children: ReactNode;
	type: 'login' | 'register';
	changeForm: () => void;
};
export const AuthLayout = ({ children, type, changeForm }: Props) => {
	return (
		<div className={styles.container}>
			<div className={styles.body}>
				<div className={classNames(styles.title, 'mb-30 low fw-500 fs-l-2')}>
					{type === 'login' ? 'Войти' : 'Зарегистрироваться'}
				</div>

				{children}
				<ButtonCustom
					colorType='none'
					type='button'
					className='mt-20'
					onClick={changeForm}
				>
					<span className='fs-s-2 low'>
						{type === 'login'
							? 'Нет аккаунта? Зарегистрироваться'
							: 'Уже есть аккаунт? Войти'}
					</span>
				</ButtonCustom>
				{type === 'register' && (
					<div
						className={classNames(styles.rules, 'fs-xs-3 mt-30')}
						style={{ opacity: 0.5 }}
					>
						Нажимая на кнопку зарегистрироваться, я соглашаюсь с политикой
						обработки данных
					</div>
				)}
			</div>
		</div>
	);
};
