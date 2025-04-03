'use client';

import { getRouteMain } from '@/shared/constants/router';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
type Props = {
	length?: 'long' | 'short';
};
export const LogoLink = ({ length = 'long' }: Props) => {
	const pathname = usePathname();

	const logo = length === 'long' ? 'goodies' : 'g';
	const scrollToTop = () => {
		window.scrollTo({ top: 0, behavior: 'smooth' });
	};

	return (
		<div className='logo'>
			{pathname === getRouteMain() ? (
				<button onClick={scrollToTop} aria-label='Прокрутить наверх'>
					{logo}
				</button>
			) : (
				<Link href={getRouteMain()} aria-label='Перейти на главную'>
					{logo}
				</Link>
			)}
		</div>
	);
};
