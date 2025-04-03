import { useEffect, useRef } from 'react';

export const useClickOutside = (
	callback: () => void,
	excludeClass?: string,
	ignore?: boolean
) => {
	const ref = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const handleClickOutside = (event: MouseEvent) => {
			const target = event.target as Node;

			// Игнорируем клики внутри Autocomplete Popper
			if (
				excludeClass &&
				(event.target as HTMLElement)?.closest(`.${excludeClass}`)
			) {
				return;
			}

			if (!ignore && ref.current && !ref.current.contains(target)) {
				callback();
				console.log('asdf');
			}
		};

		document.addEventListener('mousedown', handleClickOutside);
		return () => document.removeEventListener('mousedown', handleClickOutside);
	}, [callback, excludeClass, ignore]);

	return ref;
};
