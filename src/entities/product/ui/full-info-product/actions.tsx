'use client';
import classNames from 'classnames';

import { ReactNode } from 'react';
import { useInView } from 'react-intersection-observer';
import styles from './styles.module.scss';
type Props = { actionWishlist: ReactNode; actionBasket: ReactNode };

export const FullInfoProductActions = ({
	actionBasket,
	actionWishlist,
}: Props) => {
	const { ref, inView } = useInView({
		threshold: 0,
		triggerOnce: false, // Можно срабатывать несколько раз
	});
	return (
		<div className={classNames(styles.button_group, 'mb-50')} ref={ref}>
			{actionWishlist}
			{actionBasket}
		</div>
	);
};
