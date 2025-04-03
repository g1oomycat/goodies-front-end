import { ReactNode } from 'react';
import styles from './styles.module.scss';
type Props = {
	count: number;
	children?: ReactNode;
	inBanner?: boolean;
};

export const Badge = ({ children, count, inBanner }: Props) => {
	return (
		<>
			{!!count && (
				<div id='badge' className={styles.badge}>
					<div className={styles.children}>{count}</div>
				</div>
			)}
		</>
	);
};
