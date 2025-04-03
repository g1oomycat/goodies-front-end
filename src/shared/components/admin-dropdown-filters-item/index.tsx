import classNames from 'classnames';
import { ReactNode } from 'react';
import styles from './styles.module.scss';

type Props = {
	title: string;
	children: ReactNode;
};

export const AdminDropdownFiltersItem = ({ children, title }: Props) => {
	return (
		<div className={styles.item}>
			{!!title && (
				<span className={classNames(styles.title, 'fs-up-2')}>{title}</span>
			)}
			{children}
		</div>
	);
};
