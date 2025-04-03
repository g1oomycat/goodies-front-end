import { DURATION, EASING } from '@/shared/constants/base-animation';
import { Variants } from 'framer-motion';

// Анимационные варианты для меню

export const anchorVariants: Variants = {
	initial: { y: '100%' },
	animate: {
		y: 0,
		transition: { ease: EASING.IN_OUT, duration: DURATION, bounce: 0 },
	},
	exit: {
		y: '100%',
		transition: { ease: EASING.IN_OUT, duration: DURATION, bounce: 0 },
	},
};
