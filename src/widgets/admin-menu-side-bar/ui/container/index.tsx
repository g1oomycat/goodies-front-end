import { ReactNode } from 'react';
import styles from './styles.module.scss';
type Props = {
	title: string;
	children: ReactNode;
};

export const Container = ({ children, title }: Props) => {
	return (
		<div className={styles.body_cont}>
			<div className={styles.title_item}>
				<span className='fs-up-2'>{title}</span>
			</div>
			<div className={styles.menu}>{children}</div>
		</div>
	);
};
