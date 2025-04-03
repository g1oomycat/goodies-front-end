import { CompletedIcon } from '@/shared/ui/icons/completed';
import styles from './styles.module.scss';
type Props = {
	isCompleted: boolean;
	heightIcon: number;
};

export const ArrowStatus = ({ isCompleted, heightIcon }: Props) => {
	return (
		<div className={styles.wrapper}>
			<div className={styles.line}></div>
			{isCompleted ? (
				<div className={styles.icon}>
					<CompletedIcon height={heightIcon} />
				</div>
			) : (
				<div className={styles.arrow}></div>
			)}
		</div>
	);
};
