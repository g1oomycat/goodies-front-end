import cn from 'classnames';
import React, { ButtonHTMLAttributes } from 'react';

import styles from './styles.module.scss';

type Props = {
	type?: ButtonHTMLAttributes<HTMLButtonElement>['type'];
	disabled?: boolean;
	className?: keyof typeof styles;
	children?: React.ReactNode;
	colorType?: 'primary' | 'primary_opacity' | 'second' | 'active';
	onClick?: () => void;
};
// } & Omit<React.ComponentProps<'button'>, 'type'>;

export const ButtonIcon = ({
	type,
	disabled = false,
	children,
	className,
	onClick,
	colorType,
}: // ...restProps // Оставляем остальные пропсы, переданные в компонент
Props) => {
	const buttonIconClassName = cn(
		styles.root,
		className,
		colorType ? styles[colorType] : ''
	);

	return (
		<button
			type={type}
			className={buttonIconClassName}
			onClick={onClick}
			disabled={disabled}
		>
			{children}
		</button>
	);
};
