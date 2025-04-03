'use client';
import { getRouteMain } from '@/shared/constants/router';
import { ButtonCustom } from '@/shared/ui/components/button';
import { ButtonIcon } from '@/shared/ui/components/button-icon';
import { ArrowLeftIcon } from '@/shared/ui/icons/arrow_left';
import { CloseIcon } from '@/shared/ui/icons/close';
import classNames from 'classnames';
import { useRouter } from 'next/navigation';
import styles from './styles.module.scss';
export const HeaderCheckout = () => {
	const { push } = useRouter();
	return (
		<header className={classNames(styles.root, '_cont_limit_medium')}>
			<div className={styles.body}>
				<div className={'fs-xl-1'}>
					<ButtonIcon
						onClick={() => push(getRouteMain())}
						aria-label='Перейти на главную'
					>
						<ArrowLeftIcon />
					</ButtonIcon>
				</div>
				<div className={'fs-l-3 logo'}>
					<ButtonCustom
						onClick={() => push(getRouteMain())}
						aria-label='Перейти на главную'
						colorType='none'
					>
						goodies
					</ButtonCustom>
				</div>
				<div className={'fs-xl-1'}>
					<ButtonIcon
						onClick={() => push(getRouteMain())}
						aria-label='Перейти на главную'
					>
						<CloseIcon />
					</ButtonIcon>
				</div>
			</div>
		</header>
	);
};
