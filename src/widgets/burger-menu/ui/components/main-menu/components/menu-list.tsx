import { ButtonOrLinkArrow } from '@/shared/kit/button-or-link-arrow';
import { LinkCustom } from '@/shared/ui/components/link';
import styles from '../styles.module.scss';

type Props = {
	openMenu: (menu: 'catalog') => void;
};

export const MenuList = ({ openMenu }: Props) => {
	const mainLinks = [
		{ action: () => openMenu('catalog'), title: 'Каталог' },
		{ href: '', title: 'Новости' },
		{ href: '', title: 'Акции' },
		{ href: '', title: 'О нас' },
	];

	const subLinks = [
		{ href: '', title: 'Доставка' },
		{ href: '', title: 'Контакты' },
	];

	return (
		<>
			<ul className={styles.main_menu}>
				{mainLinks.map((link, index) => (
					<li key={index}>
						{link.action ? (
							<ButtonOrLinkArrow
								type='button'
								action={link.action}
								title={link.title}
							/>
						) : (
							<LinkCustom href={link.href}>{link.title}</LinkCustom>
						)}
					</li>
				))}
			</ul>

			<ul className={styles.sub_menu}>
				{subLinks.map((link, index) => (
					<li key={index}>
						<LinkCustom href={link.href}>{link.title}</LinkCustom>
					</li>
				))}
			</ul>
		</>
	);
};
