import 'swiper/scss';
import 'swiper/scss/free-mode';

import { SCREEN_LG, SCREEN_XLG, SCREEN_XXLG } from '@/shared/ui/break-points';
import { FreeMode } from 'swiper/modules';
import { SwiperOptions } from 'swiper/types';

export const instagramSliderConfig = (): SwiperOptions => ({
	freeMode: {
		enabled: true,
		momentumRatio: 0.6,
	},
	slidesPerView: 4,
	spaceBetween: 10,
	breakpoints: {
		[100]: {
			slidesPerView: 'auto',
		},

		[SCREEN_LG]: {
			slidesPerView: 3,
		},
		[SCREEN_XLG]: {
			slidesPerView: 3.5,
		},
		[SCREEN_XXLG]: {
			slidesPerView: 4,
		},
	},
	grabCursor: true,
	modules: [FreeMode],
});
