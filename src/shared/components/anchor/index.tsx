import { AnimatePresence, motion } from 'framer-motion';
import { ReactNode } from 'react';
import { anchorVariants } from './animation';
import styles from './styles.module.scss';
type Props = {
	isVisible: boolean;
	children: ReactNode;
};

export const Anchor = ({ isVisible, children }: Props) => {
	return (
		<AnimatePresence>
			{isVisible && (
				<motion.div
					className={styles.anchor}
					variants={anchorVariants}
					initial='initial'
					animate='animate'
					exit='exit'
				>
					{children}
				</motion.div>
			)}
		</AnimatePresence>
	);
};
