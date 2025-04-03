import { AccountLink } from './components/account-link';
import { MenuList } from './components/menu-list';
import { SocialLinks } from './components/social-links';
import styles from './styles.module.scss';

type Props = {
	openMenu: (menu: 'catalog') => void;
};

export const MainMenu = ({ openMenu }: Props) => {
	return (
		<div className={styles.root}>
			<nav className={styles.menu}>
				<MenuList openMenu={openMenu} />
			</nav>

			<div className={styles.footer}>
				<AccountLink />
				<SocialLinks />
			</div>
		</div>
	);
};
