'use client';

import Lenis from '@studio-freight/lenis';
import Tempus from '@studio-freight/tempus';
import { usePathname, useSearchParams } from 'next/navigation';
import { useEffect, useRef } from 'react';

export default function SmoothScroller() {
	const lenis = useRef<Lenis | null>(null);
	const pathname = usePathname();
	const searchParams = useSearchParams();

	useEffect(() => {
		if (lenis.current) lenis.current.scrollTo(0, { immediate: true });
	}, [pathname, searchParams, lenis]);

	useEffect(() => {
		lenis.current = new Lenis({
			smoothWheel: true,
			// Customize other instance settings here
		});

		const resize = setInterval(() => {
			lenis.current!.resize();
		}, 150);

		function onFrame(time: number) {
			lenis.current!.raf(time);
		}

		const unsubscribe = Tempus.add(onFrame);

		return () => {
			unsubscribe();
			clearInterval(resize);
			lenis.current!.destroy();
			lenis.current = null;
		};
	}, []);

	return null;
}
