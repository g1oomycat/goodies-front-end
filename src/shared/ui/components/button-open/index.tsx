import classNames from 'classnames';
import styles from './styles.module.scss';

type Props = {
	isOpen: boolean;
};

export const ButtonOpen = ({ isOpen }: Props) => {
	return (
		<div className={styles.icon}>
			<div
				className={classNames(
					styles.vertical,
					isOpen ? styles.active_vertical : ''
				)}
			></div>
			<div
				className={classNames(
					styles.horizontal,
					isOpen ? styles.active_horizontal : ''
				)}
			></div>
		</div>
	);
};
