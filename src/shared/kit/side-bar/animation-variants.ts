import {
	bodyAnimate,
	bodyExit,
	transitionSideBarAnimate,
	transitionSideBarExit,
} from '@/shared/constants/base-animation';
import { Variants } from 'framer-motion';

// Настройки переходов

// Анимационные варианты для контейнера
export const LeftContainerVariants: Variants = {
	initial: { x: '-100%' },
	animate: {
		x: 0,
		transition: transitionSideBarAnimate,
	},
	exit: {
		x: '-100%',
		transition: transitionSideBarExit,
	},
};
export const RightContainerVariants: Variants = {
	initial: { x: '100%' },
	animate: {
		x: 0,
		transition: transitionSideBarAnimate,
	},
	exit: {
		x: '100%',
		transition: transitionSideBarExit,
	},
};

// Анимационные варианты для тела меню
export const bodyVariants: Variants = {
	initial: { y: 50, opacity: 0 },
	animate: {
		y: 0,
		opacity: 1,
		transition: bodyAnimate,
	},
	exit: {
		y: 50,
		opacity: 0,
		transition: bodyExit,
	},
};
