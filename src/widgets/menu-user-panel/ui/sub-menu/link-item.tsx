import { LinkCustom } from '@/shared/ui/components/link';
import { LinkProps } from 'next/link';
import styles from './styles.module.scss';
type Props = {
	label: string;
	href: LinkProps['href'];
	pathname: string;
};

export const SubMenuLinkItem = ({ href, label, pathname }: Props) => {
	return (
		<>
			{pathname === href ? (
				<div className={styles.item_link}>
					<span>{label}</span>
				</div>
			) : (
				<LinkCustom href={href}>{label}</LinkCustom>
			)}
		</>
	);
};
