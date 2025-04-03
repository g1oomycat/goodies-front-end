import { useEffect, useState } from 'react';

export const useIsTop = () => {
	const [isTop, setIsTop] = useState(true);

	useEffect(() => {
		const handleScroll = () => {
			setIsTop(window.scrollY === 0);
		};

		window.addEventListener('scroll', handleScroll);
		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, []);

	return isTop;
};
