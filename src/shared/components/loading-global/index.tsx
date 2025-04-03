'use client';
import { useLoadingGlobalStore } from '@/shared/config/loading-global-store';
import { useEffect } from 'react';
import { BarLoader } from 'react-spinners';
import styles from './styles.module.scss';

export default function LoadingGlobal() {
	// You can add any UI inside Loading, including a Skeleton.
	const { isLoading } = useLoadingGlobalStore();

	useEffect(() => {
		if (isLoading) {
			document.body.style.overflow = 'hidden';
		} else {
			document.body.style.overflow = '';
		}
	}, [isLoading]);

	if (!isLoading) {
		return <></>;
	}
	return (
		<div className={styles.root}>
			<div className={styles.body}>
				<BarLoader color='var(--color-text)' width={'100%'} loading={true} />
			</div>
		</div>
	);
}
