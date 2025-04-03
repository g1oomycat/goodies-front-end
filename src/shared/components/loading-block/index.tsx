'use client';
import { BarLoader } from 'react-spinners';
import styles from './styles.module.scss';
type Props = {
	isLoading: boolean;
};

export const LoadingBlock = ({ isLoading }: Props) => {
	return (
		<>
			{isLoading && (
				<div className={styles.loading}>
					<div className={styles.loader}>
						<BarLoader color='var(--color-text)' width={'100%'} />
					</div>
					<div className={styles.bg}></div>
				</div>
			)}
		</>
	);
};
