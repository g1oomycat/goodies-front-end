'use client';
import { EnumExternalLinks } from '@/shared/constants/external-links';
import { InstagramIcon } from '@/shared/ui/icons/instagram';
import { TelegramIcon } from '@/shared/ui/icons/telegram';
import { default as cn } from 'classnames';
import { FooterLogo } from './footer-logo';
import { LinkList } from './link-list';
import styles from './styles.module.scss';
export const Footer = () => {
	return (
		<footer className={cn(styles.root)}>
			<div className={cn(styles.fixedContent, '_cont_limit')}>
				<div className={styles.content}>
					<div className={styles.info}>
						<LinkList
							title='Социальные сети'
							links={[
								{
									href: EnumExternalLinks.INSTAGRAM,
									label: 'instagram',
									icon: <InstagramIcon />,
								},
								{
									href: EnumExternalLinks.TELEGRAM_PROJECT,
									label: 'telegram',
									icon: <TelegramIcon />,
								},
							]}
						/>
						<LinkList
							title='Клиентам'
							links={[
								{ href: '', label: 'акции' },
								{ href: '', label: 'новости' },
							]}
						/>
						<LinkList
							title='Контакты'
							links={[
								{ href: '', label: 'example@goodies.ks' },
								{ href: '', label: '8 (800) 555-35-35' },
							]}
						/>
					</div>
					<FooterLogo />
				</div>
			</div>
		</footer>
	);
};
