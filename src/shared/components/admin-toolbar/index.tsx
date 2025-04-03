import { ReactNode } from 'react';
import styles from './styles.module.scss';
type Props = {
	filterAction: ReactNode;
	otherActions?: ReactNode;
};

export const AdminToolbar = ({ filterAction, otherActions }: Props) => {
	return (
		<div className={styles.root}>
			<div className={styles.body}>
				<div className={styles.searh}>{filterAction}</div>
				{!!otherActions && <div className={styles.actions}>{otherActions}</div>}
			</div>
		</div>
	);
};
