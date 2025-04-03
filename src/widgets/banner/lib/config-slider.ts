import { SCREEN_LG } from '@/shared/ui/break-points';
import { Autoplay, Navigation, Pagination, Parallax } from 'swiper/modules';

import 'swiper/scss';
import 'swiper/scss/autoplay';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';
type Props = {
	bulletActiveClass: string;
	nextEl: string;
	prevEl: string;
	horizontalPagination: string;
};
//slider config options
export const configMainSLider = ({
	bulletActiveClass,
	horizontalPagination,
	nextEl,
	prevEl,
}: Props) => ({
	slidesPerView: 1,
	loop: true,
	parallax: true,
	speed: 1200,
	pagination: {
		clickable: false,
		horizontalClass: horizontalPagination,
		bulletActiveClass: bulletActiveClass,
	},

	autoplay: { delay: 1000 * 10 },
	navigation: {
		nextEl: nextEl,
		prevEl: prevEl,
	},
	allowTouchMove: true,
	breakpoints: {
		// when window width is >= 320px
		[SCREEN_LG]: {
			allowTouchMove: false,
		},
	},
	modules: [Autoplay, Pagination, Parallax, Navigation],
});
