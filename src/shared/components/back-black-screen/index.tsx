import { useEscClose } from '@/shared/hooks/useEscClose';
import { handleOutsideClick } from '@/shared/lib/handle-outside-click';
import classNames from 'classnames';
import { AnimatePresence, motion } from 'framer-motion';
import { ReactNode } from 'react';
import { menuVariants } from './animations';
import styles from './styles.module.scss';

type Props = {
	children: ReactNode;
	isOpen: boolean;
	closeMenu: () => void;
	withHeader?: boolean;
};

export const BackBlackScreen = ({
	children,
	isOpen,
	closeMenu,
	withHeader,
}: Props) => {
	useEscClose(isOpen, closeMenu);
	return (
		<AnimatePresence>
			{isOpen && (
				<motion.div
					className={classNames(
						styles.menu,
						withHeader ? styles.withHeader : ''
					)}
					onClick={event => handleOutsideClick(event, closeMenu)}
					variants={menuVariants}
					key='shadow-bg'
					initial='initial'
					animate='animate'
					exit='exit'
					data-lenis-prevent
				>
					{children}
				</motion.div>
			)}
		</AnimatePresence>
	);
};
