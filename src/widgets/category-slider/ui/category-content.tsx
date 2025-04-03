'use client';

import { ICategoriesResponse } from '@/entities/category';
import { CategoryCard } from '@/entities/category/ui';
import cn from 'classnames';
import { Swiper, SwiperSlide } from 'swiper/react';
import { mainSliderConfig } from '../lib/config-slider';
import styles from './styles.module.scss';
type Props = {
	data: ICategoriesResponse[];
};
export const CategoryContent = ({ data }: Props) => {
	return (
		<section className={cn(styles.root, '_cont_limit')}>
			<div className={'mb-100'}>
				<Swiper
					{...mainSliderConfig(`${styles.scroll_bar_hor}`)}
					className={styles.swiper}
				>
					{data.map((category, index) => (
						<SwiperSlide key={index} className={styles.slide}>
							<CategoryCard data={category} />
						</SwiperSlide>
					))}
				</Swiper>
			</div>
		</section>
	);
};
