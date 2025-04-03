'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ReactNode } from 'react';
import styles from './styles.module.scss';
type Props = {
	href: string;
	icon: ReactNode;
	title: ReactNode;
};

export const Item = ({ href, icon, title }: Props) => {
	const pathname = usePathname();
	return (
		<Link href={href}>
			<div
				className={styles.item}
				style={{
					backgroundColor: pathname.includes(href)
						? 'var(--color-bg-active)'
						: '',
				}}
			>
				<span className='fs-m-2'>{icon}</span>
				<span className='fs-m-1 low'>{title}</span>
			</div>
		</Link>
	);
};
