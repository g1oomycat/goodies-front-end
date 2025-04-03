'use client';

import { BackBlackScreen } from '@/shared/components/back-black-screen';
import { useEscClose } from '@/shared/hooks/useEscClose';
import classNames from 'classnames';
import { AnimatePresence, motion } from 'framer-motion';
import { ReactNode } from 'react';

import {
	bodyVariants,
	LeftContainerVariants,
	RightContainerVariants,
} from './animation-variants';
import styles from './styles.module.scss';

interface SideBarProps {
	menuSize: 'small' | 'middle' | 'large';
	side: 'left' | 'right';
	children: ReactNode;
	isOpen: boolean;
	closeMenu: () => void;
	keyAnimate?: string;
	withHeader?: boolean;
	portalChildren?: ReactNode;
}

export const SideBar = ({
	menuSize,
	children,
	isOpen,
	closeMenu,
	keyAnimate,
	side,
	withHeader,
	portalChildren,
}: SideBarProps) => {
	// Закрытие по клавише Esc
	useEscClose(isOpen, closeMenu);
	return (
		<BackBlackScreen
			closeMenu={closeMenu}
			isOpen={isOpen}
			withHeader={withHeader}
		>
			<motion.div
				className={classNames(styles.root, styles[menuSize], styles[side])}
				variants={
					side === 'left' ? LeftContainerVariants : RightContainerVariants
				}
				key='wrapper-side-bar'
				initial='initial'
				animate='animate'
				exit='exit'
			>
				<AnimatePresence propagate>
					<motion.div
						className={styles.children}
						key={keyAnimate}
						variants={bodyVariants}
						initial='initial'
						animate='animate'
						exit='exit'
					>
						{children}
					</motion.div>
				</AnimatePresence>
				{portalChildren}
			</motion.div>
		</BackBlackScreen>
	);
};
