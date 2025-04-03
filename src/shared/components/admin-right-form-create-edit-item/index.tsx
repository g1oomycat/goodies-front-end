import { DotLoader, DotLoaderProps } from '@/shared/kit/dot-loader';
import { SkeletonMui } from '@/shared/ui/components/skeleton';
import classNames from 'classnames';
import { ReactNode } from 'react';
import styles from './styles.module.scss';

type Props = {
	title: string;
	value?: DotLoaderProps;
	children?: ReactNode;
	isLoading?: boolean;
};

export const AdminRightFormCreateEditItem = ({
	title,
	children,
	value,
	isLoading,
}: Props) => {
	return (
		<div className={styles.item}>
			<div className={styles.text}>
				<div className={classNames(styles.title, 'fs-m-2 fw-500')}>
					{isLoading ? <SkeletonMui variant='text' width='50%' /> : title}
				</div>
				{isLoading && (
					<div className={'fs-s-1 low'}>
						<SkeletonMui variant='text' width='100%' />
					</div>
				)}

				{!!value && !isLoading && (
					<div className='fs-s-1 low mt-20'>
						<DotLoader {...value} style={{ gap: '1rem' }} />
					</div>
				)}
			</div>

			{!!children ? children : <></>}
		</div>
	);
};
