import React, { ButtonHTMLAttributes, CSSProperties } from 'react';

import classNames from 'classnames';
import Link from 'next/link';
import { PulseLoader } from 'react-spinners';
import styles from './styles.module.scss';

type Props = {
	type?: ButtonHTMLAttributes<HTMLButtonElement>['type'];
	disabled?: boolean;
	className?: keyof typeof styles;
	children?: React.ReactNode;
	fullWidth?: boolean;
	childrenType?: 'icon' | 'icon_active' | 'text';
	mode?: 'admin' | 'public';
	colorType?: 'primary' | 'second' | 'none';
	size?: 's' | 'm' | 'l';
	onClick?: () => void;
	contain?: boolean;
	link?: string;
	style?: CSSProperties; // Добавляем поддержку кастомных стилей
	isLoading?: boolean;
	form?: string;
};

export const ButtonCustom = ({
	type,
	disabled = false,
	children,
	className,
	onClick,
	fullWidth = false,
	colorType = 'primary',
	childrenType = 'text',
	contain,
	size,
	link,
	style, // Принимаем inline-стили
	isLoading = false,
	form,
	mode = 'public',
}: Props) => {
	const buttonClassName = classNames(
		styles.root,
		className,
		mode ? styles[mode] : '',
		colorType ? styles[colorType] : '',
		fullWidth ? styles.fullWidth : '',
		size ? styles[size] : '',
		contain ? styles['contain'] : '',
		childrenType ? styles[childrenType] : '',
		'fs-up-3'
	);

	return (
		<>
			{!link ? (
				<button
					type={type}
					className={buttonClassName}
					onClick={onClick}
					disabled={disabled}
					form={form}
					style={style} // Применяем переданные стили
				>
					<>
						{children}

						{isLoading && (
							<div className={styles.loader}>
								<PulseLoader
									size={7}
									color={
										colorType === 'primary'
											? 'var(--color-text-inverted)'
											: 'var(--color-text)'
									}
								/>
							</div>
						)}
					</>
				</button>
			) : (
				<Link
					href={link}
					style={{
						height: contain ? '100%' : '',
					}}
				>
					<div
						className={buttonClassName}
						style={{
							...style,
							display: 'flex',
							alignItems: 'center',
							justifyContent: 'center',
						}}
					>
						{children}
					</div>
				</Link>
			)}
		</>
	);
};
