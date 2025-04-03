'use client';
import { IBannerResponse } from '@/entities/banner';
import { useEffect } from 'react';

export const ChangeColorByBanner = (
	data: IBannerResponse[],
	SCREEN_SM: boolean
) => {
	function getCursorSvg(color: string, direction: 'prev' | 'next') {
		const arrowPath =
			direction === 'prev'
				? 'M373.85-226.92 120-480.77l253.85-253.85 23.33 23.34-214.03 213.59h657.62v33.84H183.92l214.11 213.59-24.18 23.34Z'
				: 'm586.92-226.92-23.66-23.34 213.59-213.59H120v-33.84h657.62L563.59-711.28l23.33-23.34 253.85 253.85-253.85 253.85Z';

		return `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="50" viewBox="0 -960 960 960" width="50" fill="${encodeURIComponent(
			color
		)}"><path d="${arrowPath}"/></svg>`;
	}

	function updateCursorColor() {
		const bannerColor =
			getComputedStyle(document.documentElement)
				.getPropertyValue('--banner-color')
				.trim() || '#000';

		document.documentElement.style.setProperty(
			'--prev-cursor',
			`url('${getCursorSvg(bannerColor, 'prev')}') 0 25, auto`
		);
		document.documentElement.style.setProperty(
			'--next-cursor',
			`url('${getCursorSvg(bannerColor, 'next')}') 50 25, auto`
		);
	}
	const handleSlideChange = (index: number) => {
		const newTextColor = data[index]?.textColor || '#000000';

		setTimeout(
			() => {
				document.documentElement.style.setProperty(
					'--banner-color',
					newTextColor
				);
				updateCursorColor();
			},
			SCREEN_SM ? 400 : 1
		); // Задержка в 400 мс
	};
	useEffect(() => {
		if (data) handleSlideChange(0);
	}, [data]);
	return handleSlideChange;
};
