// Константы для длительности и задержек
export const DURATION = 0.2;

export const DELAY = 0.2;

// Константы для функций сглаживания
export const EASING = {
	CUSTOM: [0.76, 0, 0.24, 1], // Кастомная функция сглаживания
	IN_OUT: 'easeInOut', // Функция сглаживания для тела
};

export const bodyAnimate = {
	duration: DURATION,
	ease: EASING.IN_OUT,
	bounce: 0,
	delay: DURATION, // Тело ждет окончания анимации меню и контейнера
};
export const bodyExit = {
	duration: DURATION,
	ease: EASING.IN_OUT,
	bounce: 0,
};
export const transitionSideBarAnimate = {
	duration: DURATION,
	bounce: 0,
	ease: EASING.CUSTOM,
};
export const transitionSideBarExit = {
	delay: DELAY,
	duration: DURATION,
	bounce: 0,
	ease: EASING.CUSTOM,
};
