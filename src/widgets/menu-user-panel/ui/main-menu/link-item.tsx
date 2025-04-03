'use client';
import { LinkCustom } from '@/shared/ui/components/link';
import { LinkProps } from 'next/link';
import { usePathname } from 'next/navigation';
import styles from './styles.module.scss';

type Props = {
	label: string;
	href: LinkProps['href'];
};

export const LinkItemMenuUserPanel = ({ href, label }: Props) => {
	const pathname = usePathname();
	return (
		<>
			{pathname === href ? (
				<div
					style={{ display: 'flex', alignItems: 'center' }}
					className='gap-20'
				>
					<span>{label}</span> <div className={styles.line}></div>
				</div>
			) : (
				<LinkCustom href={href}>{label}</LinkCustom>
			)}
		</>
	);
};
