import 'swiper/scss';
import 'swiper/scss/autoplay';
import 'swiper/scss/free-mode';
import 'swiper/scss/navigation';
import 'swiper/scss/scrollbar';

import { SCREEN_LG, SCREEN_XLG } from '@/shared/ui/break-points';
import { FreeMode, Navigation, Scrollbar } from 'swiper/modules';
import { SwiperOptions } from 'swiper/types';

type Props = {
	horizontalClass: string;
	nextEl: string;
	prevEl: string;
};

export const configSliderUpSale = ({
	horizontalClass,
	nextEl,
	prevEl,
}: Props): SwiperOptions => ({
	freeMode: {
		enabled: true,
		sticky: false,
		momentumRatio: 0.6,
	},
	slidesPerView: 5,
	spaceBetween: 30,
	scrollbar: {
		draggable: true,
		snapOnRelease: true,
		hide: false,
		dragSize: 'auto',
		horizontalClass: horizontalClass,
		dragClass: '_drag_bar',
	},
	breakpoints: {
		[100]: {
			slidesPerView: 'auto',
		},
		[SCREEN_LG]: {
			slidesPerView: 4,
			freeMode: {
				sticky: true,
			},
		},
		[SCREEN_XLG]: {
			slidesPerView: 5,
		},
	},
	navigation: {
		nextEl,
		prevEl,
	},
	grabCursor: true,
	modules: [FreeMode, Scrollbar, Navigation],
});
