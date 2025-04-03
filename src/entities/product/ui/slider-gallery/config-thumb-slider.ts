import { FreeMode, Navigation, Thumbs } from 'swiper/modules';

import 'swiper/scss';

import 'swiper/scss/controller';
import 'swiper/scss/navigation';

import 'swiper/scss/thumbs';
import { SwiperOptions } from 'swiper/types';

type Props = {
	nextEl: string;
	prevEl: string;
};
//slider config options
export const configThumbGalleryProductSlider = ({
	nextEl,
	prevEl,
}: Props): SwiperOptions => ({
	freeMode: {
		enabled: true,
		sticky: false,
		momentumRatio: 0.6,
	},
	slidesPerView: 4,
	spaceBetween: 10,

	direction: 'vertical',
	watchSlidesProgress: true,
	allowTouchMove: true,
	navigation: {
		nextEl: nextEl,
		prevEl: prevEl,
	},
	// autoHeight: true,
	modules: [FreeMode, Thumbs, Navigation],
});
