'use client';
import { useState } from 'react';
import { Swiper as SwiperType } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/scss/thumbs';
import { configGalleryProductSlider } from './config-slider';

import { productCardBlur } from '@/shared/constants/blur-data-url';
import { ArrowMiniIcon } from '@/shared/ui/icons/arrow-mini';
import Image from 'next/image';
import { configThumbGalleryProductSlider } from './config-thumb-slider';
import styles from './styles.module.scss';
type Props = {
	images: string[];
	alt: string;
};

export const SliderGallery = ({ alt, images }: Props) => {
	const [thumbsSwiper, setThumbsSwiper] = useState<SwiperType | null>(null);
	const [activeIndex, setActiveIndex] = useState(0);

	return (
		<div className={styles.root}>
			<Swiper
				{...configGalleryProductSlider({
					thumbsSwiper: thumbsSwiper,
					bulletActiveClass: styles.customPaginationBulletActive,
				})}
				className={styles.swiper}
				onSlideChange={sw => setActiveIndex(sw.realIndex)}
			>
				{images.map((image, index) => (
					<SwiperSlide key={index}>
						<div className={styles.img_product_wrapper}>
							<Image
								src={image}
								alt={`${alt} - ${index}`}
								fill={true}
								id={`img-card-${index}`}
								priority={index === 0}
								loading={index === 0 ? 'eager' : 'lazy'}
								sizes='90vw'
								placeholder='blur'
								blurDataURL={productCardBlur}
							/>
						</div>
					</SwiperSlide>
				))}
			</Swiper>

			<div className={styles.wrapper_thumb}>
				<button className={styles.prevButton}>
					<ArrowMiniIcon direction='top' />
				</button>

				<Swiper
					onSwiper={setThumbsSwiper}
					{...configThumbGalleryProductSlider({
						nextEl: `.${styles.nextButton}`,
						prevEl: `.${styles.prevButton}`,
					})}
					className={styles.thumb}
					style={
						{
							'--items-count': Math.min(images.length, 4),
						} as React.CSSProperties
					}
				>
					{images.map((image, index) => (
						<SwiperSlide key={index}>
							<div
								className={styles.img_product_wrapper}
								style={{
									opacity: activeIndex === index ? 1 : 0.4,
								}}
							>
								<Image
									src={image}
									alt={`${alt}- мини - ${index}`}
									className='_image_cover'
									fill={true}
									sizes='10vw'
									placeholder='blur'
									blurDataURL={productCardBlur}
								/>
							</div>
						</SwiperSlide>
					))}
				</Swiper>

				<button className={styles.nextButton}>
					<ArrowMiniIcon direction='bottom' />
				</button>
			</div>
		</div>
	);
};
