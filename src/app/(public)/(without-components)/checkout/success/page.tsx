'use client';
import { getOneOrdersSelf } from '@/entities/orders';
import { useLoadingGlobalStore } from '@/shared/config/loading-global-store';
import { getRouteMain, getRouteOrders } from '@/shared/constants/router';
import { ButtonCustom } from '@/shared/ui/components/button';
import classNames from 'classnames';
import { useRouter, useSearchParams } from 'next/navigation';
import { useEffect } from 'react';
import styles from './styles.module.scss';

export default function PageSuccess() {
	const { setLoading } = useLoadingGlobalStore();

	const params = useSearchParams();
	const { push } = useRouter();
	const publicId = params.get('order');
	if (!publicId) {
		push(getRouteMain());
		return null;
	}
	const { data, isLoading } = getOneOrdersSelf(publicId);

	const now = new Date();
	now.setHours(now.getHours() + 3);

	useEffect(() => {
		if (!isLoading && data) setLoading(false);
	}, [data, isLoading]);

	if (!data) {
		return <></>;
	} else if (new Date(data.createdAt) > now) {
		push(getRouteMain());
		return null;
	}
	return (
		<div className='_cont_limit_medium mt-40'>
			<div className={classNames(styles.root, 'gap-30')}>
				<h1>Спасибо за ваш заказ!</h1>
				<h2 className='low'>{`Ваш заказ №${data.publicId} успешно оформлен.`}</h2>
				<h4>
					в ближайшее в время с вами свяжется наш менеджер для согласования
					деталей заказа.
				</h4>
				<div className={styles.buttons}>
					<ButtonCustom
						onClick={() => push(getRouteMain())}
						colorType='second'
						size='m'
					>
						Перейти к покупкам
					</ButtonCustom>
					<ButtonCustom onClick={() => push(getRouteOrders())} size='m'>
						Перейти к заказу
					</ButtonCustom>
				</div>
			</div>
		</div>
	);
}
