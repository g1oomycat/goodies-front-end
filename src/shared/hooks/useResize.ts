import { useEffect, useState } from 'react';
import {
	SCREEN_LG,
	SCREEN_MD,
	SCREEN_SM,
	SCREEN_XLG,
	SCREEN_XSM,
	SCREEN_XXLG,
} from '../ui/break-points';

export const useResize = () => {
	const [width, setWidth] = useState(0);

	useEffect(() => {
		if (typeof window === 'undefined') return;
		setWidth(window.innerWidth); // Устанавливаем ширину после монтирования
		const handleResize = () => {
			setWidth(window.innerWidth);
		};

		window.addEventListener('resize', handleResize);
		return () => {
			window.removeEventListener('resize', handleResize);
		};
	}, []);

	return {
		width,

		SCREEN_XSM: width >= SCREEN_XSM,
		SCREEN_SM: width >= SCREEN_SM,
		SCREEN_MD: width >= SCREEN_MD,
		SCREEN_LG: width >= SCREEN_LG,
		SCREEN_XL: width >= SCREEN_XLG,
		SCREEN_XXL: width >= SCREEN_XXLG,
	};
};
