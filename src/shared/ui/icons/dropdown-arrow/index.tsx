import classNames from 'classnames';
import styles from './styles.module.scss';

type Props = {
	isOpen: boolean;
};

export const DropdownArrowIcon = ({ isOpen }: Props) => {
	return (
		<div className={classNames(styles.root, { [styles.open]: isOpen })}>
			<div className={styles.left}></div>
			<div className={styles.right}></div>
		</div>
	);
};
