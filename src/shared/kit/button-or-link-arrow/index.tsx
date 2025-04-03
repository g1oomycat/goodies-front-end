'use client';

import { ArrowRightIcon } from '@/shared/ui/icons/arrow_right';
import Link from 'next/link';
import { FC, ReactNode } from 'react';
import styles from './styles.module.scss';

type ButtonProps = {
	type: 'button';
	action: () => void;
	title: ReactNode;
	size?: number;
};

type LinkProps = {
	type: 'link';
	title: ReactNode;
	size?: number;
	link: string;
};

type Props = ButtonProps | LinkProps;

export const ButtonOrLinkArrow: FC<Props> = props => {
	const { title } = props;

	if (props.type === 'button') {
		const { action } = props;
		return (
			<button className={styles.button_menu} onClick={action}>
				<span>{title}</span>
				<ArrowRightIcon size={20} />
			</button>
		);
	}

	// Если type === 'link'
	const { link } = props;
	return (
		<Link className={styles.button_menu} href={link}>
			<span>{title}</span>
			<ArrowRightIcon size={20} />
		</Link>
	);
};
