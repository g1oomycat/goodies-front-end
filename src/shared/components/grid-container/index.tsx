import classNames from 'classnames';
import { ReactNode } from 'react';
import styles from './styles.module.scss';

type Props = {
	children: ReactNode;
	startColumn?: number; // Число от 2 до 5
	className?: string;
};

export const GridContainer = ({
	children,
	className,
	startColumn = 4,
}: Props) => {
	// Проверка, чтобы значение было в пределах 2-5
	const columnClass =
		startColumn >= 2 && startColumn <= 5
			? styles[`col${startColumn}`]
			: styles.col4; // По умолчанию используем col4

	return (
		<div className={classNames(styles.root, className, columnClass)}>
			{children}
		</div>
	);
};
