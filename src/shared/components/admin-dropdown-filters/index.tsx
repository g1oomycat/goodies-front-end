import { ButtonCustom } from '@/shared/ui/components/button';
import classNames from 'classnames';
import { ReactNode } from 'react';
import styles from './styles.module.scss';
type Props = {
	isVisible: boolean;
	children: ReactNode;
	reset: () => void;
};

export const AdminDropdownFilters = ({ isVisible, children, reset }: Props) => {
	return (
		<div
			className={classNames(
				styles.menu,
				isVisible ? styles.show : styles.hidden
			)}
		>
			<div className={styles.body}>
				{children}
				<div className={styles.actions}>
					<ButtonCustom size='m' fullWidth type='submit' mode='admin'>
						Найти
					</ButtonCustom>
					<ButtonCustom
						colorType='second'
						size='m'
						fullWidth
						onClick={reset}
						mode='admin'
					>
						Сбросить фильтры
					</ButtonCustom>
				</div>
			</div>
		</div>
	);
};
