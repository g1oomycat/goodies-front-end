'use client';
import { EnumExternalLinks } from '@/shared/constants/external-links';
import { LinkCustom } from '@/shared/ui/components/link';
import { InstagramIcon } from '@/shared/ui/icons/instagram';
import { TelegramIcon } from '@/shared/ui/icons/telegram';
import { WhatsappIcon } from '@/shared/ui/icons/whatsapp';
import classNames from 'classnames';
import styles from './styles.module.scss';
export const FooterCheckout = () => {
	return (
		<footer className={classNames(styles.root)}>
			<div className={classNames(styles.body, '_cont_limit_medium fs-s-2 low')}>
				<nav>
					<ul className={classNames(styles.social, 'gap-20 ')}>
						<li>
							<LinkCustom
								href={EnumExternalLinks.INSTAGRAM}
								childrenType='width_icon'
								colorMode='pink'
								className='gap-5'
							>
								<span className='fs-s-3'>
									<InstagramIcon />
								</span>
								<span>instagram</span>
							</LinkCustom>
						</li>
						<li>
							<LinkCustom
								href={EnumExternalLinks.TELEGRAM_PROJECT}
								childrenType='width_icon'
								colorMode='pink'
							>
								<span className='fs-s-3'>
									<TelegramIcon />
								</span>
								<span>telegram</span>
							</LinkCustom>
						</li>
						<li>
							<LinkCustom
								href={EnumExternalLinks.WHATSAPP}
								childrenType='width_icon'
								colorMode='pink'
							>
								<span className='fs-s-3'>
									<WhatsappIcon />
								</span>
								<span>whatsapp</span>
							</LinkCustom>
						</li>
					</ul>
				</nav>
				<div>
					<span>© 2025, goodies</span>
				</div>
			</div>
		</footer>
	);
};
