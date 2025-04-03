'use client';

import { ButtonCustom } from '@/shared/ui/components/button';
import classNames from 'classnames';
import { ReactNode, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import styles from './styles.module.scss';

type Props = {
	children: ReactNode;
	finishButton: boolean;
	page?: number;
	hasNextPage: boolean;
	isLoading: boolean;
	fetchNextPage: () => void;
	isError: boolean;
	className?: string;
};

export const InfinityScroll = ({
	children,
	finishButton = false,
	page,
	hasNextPage,
	isLoading,
	fetchNextPage,
	isError,
	className,
}: Props) => {
	const { ref, inView } = useInView();
	useEffect(() => {
		if (hasNextPage && !isLoading && page !== 1) {
			fetchNextPage();
		}
	}, [inView]);

	return (
		<>
			{children}
			{hasNextPage && (
				<div className={classNames(styles.btn, className)} ref={ref}>
					{finishButton && page === 1 && !isError && (
						<ButtonCustom
							size='m'
							childrenType='text'
							colorType='primary'
							type='button'
							isLoading={isLoading}
							disabled={isLoading}
							onClick={fetchNextPage}
						>
							Загрузить еще
						</ButtonCustom>
					)}
					{isError && (
						<div className='fs-m-1 low fw-500'>
							Ошибка загрузки данных, перезагрузите страницу
						</div>
					)}
				</div>
			)}
		</>
	);
};
