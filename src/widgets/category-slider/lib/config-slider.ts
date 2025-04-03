import 'swiper/scss';
import 'swiper/scss/free-mode';
import 'swiper/scss/scrollbar';

import {
	SCREEN_LG,
	SCREEN_MD,
	SCREEN_XLG,
	SCREEN_XXLG,
} from '@/shared/ui/break-points';
import { FreeMode, Scrollbar } from 'swiper/modules';
import { SwiperOptions } from 'swiper/types';

export const mainSliderConfig = (horizontalClass: string): SwiperOptions => ({
	freeMode: {
		enabled: true,
		sticky: true,
		momentumRatio: 0.6,
	},
	slidesPerView: 8,

	spaceBetween: 20,
	scrollbar: {
		draggable: true,
		snapOnRelease: true,
		hide: false,
		dragSize: 150,
		horizontalClass: horizontalClass,
		dragClass: '_drag_bar',
	},
	breakpoints: {
		100: {
			spaceBetween: 20,
			slidesPerView: 'auto',
		},
		[SCREEN_MD]: {
			scrollbar: {
				dragSize: 250,
			},
		},
		[SCREEN_LG]: {
			slidesPerView: 6,
			scrollbar: {
				dragSize: 300,
			},
			spaceBetween: 30,
		},
		[SCREEN_XLG]: {
			slidesPerView: 7,
		},
		[SCREEN_XXLG]: {
			slidesPerView: 8,
		},
	},
	grabCursor: true,
	modules: [FreeMode, Scrollbar],
});
