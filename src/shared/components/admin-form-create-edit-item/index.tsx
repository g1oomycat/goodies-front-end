import { SkeletonMui } from '@/shared/ui/components/skeleton';
import classNames from 'classnames';
import styles from './styles.module.scss';
interface Props {
	title: string;
	children: React.ReactNode;
	isChildrenInput?: boolean;
	isLoading?: boolean;
}

export const AdminFormCreateEditItem = ({
	children,
	title,
	isLoading,
	isChildrenInput = true,
}: Props) => {
	return (
		<div className={classNames(styles.item, 'admin-form-block fs-s-2 low')}>
			<div className={classNames(styles.title, 'admin-form-item fw-500')}>
				{isLoading ? <SkeletonMui variant='text' /> : title}
			</div>
			<div
				className={styles.container}
				style={{ top: isChildrenInput ? '10px' : '' }}
			>
				{isLoading ? <SkeletonMui width={'100%'} height={60} /> : children}
			</div>
		</div>
	);
};
