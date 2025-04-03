'use client';

import { AdminAuthForm } from '@/features/admin-auth/ui/auth-form';
import classNames from 'classnames';
import styles from './styles.module.scss';

export default function AuthAdmin() {
	return (
		<div className={styles.root}>
			<div className={styles.wrapper}>
				<span className={classNames(styles.title, 'fs-m-low-3')}>
					Войти в админку
				</span>

				<AdminAuthForm />
			</div>
		</div>
	);
}
