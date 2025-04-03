import { CheckCircleIcon } from '@/shared/ui/icons/check-circle';
import { ErrorIcon } from '@/shared/ui/icons/error';
import { LikeStrokeIcon } from '@/shared/ui/icons/like-stroke';
import { ShoppingBagIcon } from '@/shared/ui/icons/shopping-bag';
import { WarningIcon } from '@/shared/ui/icons/warning';
import classNames from 'classnames';
import Image from 'next/image';
import { ReactNode } from 'react';
import styles from './styles.module.scss';

export const IconsToaster = {
	FAV: <LikeStrokeIcon />,
	CART: <ShoppingBagIcon />,
	WARNING: <WarningIcon />,
	ERROR: <ErrorIcon />,
	SUCCESS: <CheckCircleIcon />,
} as const;

export type CustomToastProductProps = {
	bgColor?: string;
	bgText?: string;
	image?: string;
	subtitle?: string;
	title: string | ReactNode;
	icon?: keyof typeof IconsToaster;
};

export const CustomToastProduct = ({
	bgColor = 'var(--color-text)',
	image,
	title,
	subtitle,
	icon,
	bgText = 'var(--color-pink)',
}: CustomToastProductProps) => {
	return (
		<div
			className={styles.body}
			style={{
				backgroundColor: bgColor,
			}}
		>
			{!!image && (
				<div className={styles.image}>
					<Image
						src={image}
						alt='Notification'
						priority
						loading='eager'
						width={65}
						height={65}
						sizes='3vw'
					/>
				</div>
			)}
			<div
				className={styles.info}
				style={{
					color: bgText,
				}}
			>
				<div className={classNames('fs-up-1  mb-10', styles.title)}>
					{!!icon && (
						<span className='icon-wrapper fs-up-3'>{IconsToaster[icon]} </span>
					)}
					<span>{title}</span>
				</div>
				<p className={classNames('fs-s-2 fw-500', styles.subtitle)}>
					{subtitle}
				</p>
			</div>
		</div>
	);
};
