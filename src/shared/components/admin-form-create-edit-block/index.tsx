import { SkeletonMui } from '@/shared/ui/components/skeleton';
import styles from './styles.module.scss';
interface Props {
	title: string;
	children: React.ReactNode;
	isLoading?: boolean;
}

export const AdminFormCreateEditBlock = ({
	children,
	title,
	isLoading,
}: Props) => {
	return (
		<div className={styles.wrapper}>
			<div className={'admin-form-block fs-l-1 fw-500 low'}>
				<div className={'admin-form-item'}></div>
				<div className={styles.title}>
					{isLoading ? <SkeletonMui width={400} variant='text' /> : title}
				</div>
			</div>
			<div className={styles.body}>{children}</div>
		</div>
	);
};
