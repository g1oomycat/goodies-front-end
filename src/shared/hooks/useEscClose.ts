'use client';
import { useCallback, useEffect } from 'react';
import { useMenuStore } from '../config/burger-menu-store';

export const useEscClose = (isOpen: boolean, closeMenu?: () => void) => {
	const { isOpen: isOpenMenuStore } = useMenuStore();
	// Мемоизированная функция закрытия по Escape
	const handleEsc = useCallback(
		(event: KeyboardEvent) => {
			if (event.key === 'Escape' && closeMenu) {
				closeMenu();
			}
		},
		[closeMenu]
	);

	useEffect(() => {
		// Добавляем обработчик, если меню открыто
		if (isOpen) {
			window.addEventListener('keydown', handleEsc);
			document.body.classList.add('modal-open');
			const header = document.querySelector('header');
			if (header && window.getComputedStyle(header).position === 'fixed') {
				header.classList.add('modal-open');
			}
		} else {
			window.removeEventListener('keydown', handleEsc);
			if (!isOpenMenuStore) {
				document.body.classList.remove('modal-open');
			}
			const header = document.querySelector('header');
			if (
				!isOpenMenuStore &&
				header &&
				window.getComputedStyle(header).position === 'fixed'
			) {
				header.classList.remove('modal-open');
			}
		}

		// Очистка слушателя при размонтировании или изменении isOpen
		return () => {
			window.removeEventListener('keydown', handleEsc);
		};
	}, [isOpen, handleEsc]);

	// Установка ширины скроллбара один раз при первом рендере
	useEffect(() => {
		const div = document.createElement('div');
		div.style.overflowY = 'scroll';
		div.style.width = '50px';
		div.style.height = '50px';
		document.body.append(div);
		const scrollWidth = div.offsetWidth - div.clientWidth;
		div.remove();
		document.documentElement.style.setProperty(
			'--scrollbar-width',
			`${scrollWidth}px`
		);
	}, []);
};
