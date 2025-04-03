import { ReactNode } from 'react';
import styles from './styles.module.scss';
type Props = {
	children: ReactNode;
};

export const BlurBlock = ({ children }: Props) => {
	return <div className={styles.root}>{children}</div>;
};
