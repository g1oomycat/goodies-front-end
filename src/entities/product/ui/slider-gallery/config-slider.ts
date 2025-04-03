import { Navigation, Pagination, Thumbs } from 'swiper/modules';

import 'swiper/scss';

import 'swiper/scss/controller';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';
import 'swiper/scss/thumbs';
import { Swiper, SwiperOptions } from 'swiper/types';

type Props = {
	thumbsSwiper: string | Swiper | null;
	bulletActiveClass: string;
};
//slider config options
export const configGalleryProductSlider = ({
	thumbsSwiper,
	bulletActiveClass,
}: Props): SwiperOptions => ({
	slidesPerView: 1,
	loop: true,
	thumbs: { swiper: thumbsSwiper, autoScrollOffset: 0 },
	speed: 1200,
	spaceBetween: 20,
	pagination: {
		clickable: false,
		// horizontalClass: horizontalPagination,
		bulletActiveClass: bulletActiveClass,
	},

	allowTouchMove: true,

	modules: [Pagination, Thumbs, Navigation],
});
