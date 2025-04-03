import { EnumExternalLinks } from '@/shared/constants/external-links';
import { LinkCustom } from '@/shared/ui/components/link';
import classNames from 'classnames';
import styles from './styles.module.scss';

export const FooterLogo = () => {
	return (
		<div className={styles.logo}>
			<span className={styles.main}>goodies</span>
			<div className={classNames(styles.dev, 'fs-s-1')}>
				<span>© 2025, goodies</span>
				<LinkCustom
					href={EnumExternalLinks.TELEGRAM_DP}
					colorMode='pink'
					target='_blank'
				>
					developed by NASYROV
				</LinkCustom>
			</div>
		</div>
	);
};
