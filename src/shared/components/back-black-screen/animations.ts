import {
	transitionSideBarAnimate,
	transitionSideBarExit,
} from '@/shared/constants/base-animation';
import { Variants } from 'framer-motion';

// Анимационные варианты для меню

export const menuVariants: Variants = {
	initial: { backgroundColor: 'rgba(0, 0, 0, 0)' },
	animate: {
		backgroundColor: 'rgba(0, 0, 0, 0.3)',
		transition: transitionSideBarAnimate,
	},
	exit: {
		backgroundColor: 'rgba(0, 0, 0, 0)',
		transition: transitionSideBarExit,
	},
};
