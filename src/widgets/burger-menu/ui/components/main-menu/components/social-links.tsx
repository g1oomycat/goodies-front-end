import { EnumExternalLinks } from '@/shared/constants/external-links';
import { LinkCustom } from '@/shared/ui/components/link';
import { InstagramIcon } from '@/shared/ui/icons/instagram';
import { TelegramIcon } from '@/shared/ui/icons/telegram';
import { WhatsappIcon } from '@/shared/ui/icons/whatsapp';
import styles from '../styles.module.scss';

export const SocialLinks = () => {
	const socialLinks = [
		{
			href: EnumExternalLinks.WHATSAPP,
			icon: <WhatsappIcon />,
		},
		{
			href: EnumExternalLinks.INSTAGRAM,
			icon: <InstagramIcon />,
		},
		{ href: EnumExternalLinks.TELEGRAM_PROJECT, icon: <TelegramIcon /> },
	];

	return (
		<div className={styles.contacts}>
			{socialLinks.map((link, index) => (
				<LinkCustom key={index} href={link.href} childrenType='icon'>
					{link.icon}
				</LinkCustom>
			))}
		</div>
	);
};
