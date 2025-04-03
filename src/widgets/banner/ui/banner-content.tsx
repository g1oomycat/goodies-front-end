'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import styles from './styles.module.scss';

import cn from 'classnames';
import Image from 'next/image';

import { IBannerResponse } from '@/entities/banner';
import { productCardBlur } from '@/shared/constants/blur-data-url';
import { useResize } from '@/shared/hooks/useResize';
import { SCREEN_LG, SCREEN_SM } from '@/shared/ui/break-points';
import { ButtonCustom } from '@/shared/ui/components/button';
import classNames from 'classnames';
import { useRouter } from 'next/navigation';
import { configMainSLider } from '../lib/config-slider';
import { ChangeColorByBanner } from '../model';

type Props = {
	data: IBannerResponse[];
};
export const BannerContent = ({ data }: Props) => {
	const { push } = useRouter();
	const { SCREEN_SM: SCREEN_SM_RESIZE } = useResize();
	const handleSlideChange = ChangeColorByBanner(data, SCREEN_SM_RESIZE);
	const parallax = SCREEN_SM_RESIZE ? '150%' : '115%';

	return (
		<section className={cn(styles.root, 'mb-60')}>
			<button className={styles.prevButton}></button>
			<button className={styles.nextButton}></button>

			<Swiper
				{...configMainSLider({
					horizontalPagination: styles.horizontalPagination,
					bulletActiveClass: styles.customPaginationBulletActive,

					nextEl: `.${styles.nextButton}`,
					prevEl: `.${styles.prevButton}`,
				})}
				className={styles.swiper}
				onSlideChange={sw => handleSlideChange(sw.realIndex)}
			>
				{data.map((banner, index) => (
					<SwiperSlide key={index}>
						<div className={styles.wrapper_slide}>
							<div className={styles.wrapper_block}>
								<div className={styles.wrapper_text}>
									<div
										className={styles.mid_block}
										// data-swiper-parallax='percentage'
										data-swiper-parallax={parallax}
										data-swiper-parallax-opacity={0}
										// data-swiper-parallax-duration={200}
									>
										<div
											className={styles.link_banner}
											style={{ color: `${banner.textColor}` }}
										>
											<div>
												<div className={classNames(styles.title, '')}>
													<p
														className='low lh-no fs-xxl-2 fw-500'
														dangerouslySetInnerHTML={{
															__html: banner.title,
														}}
													></p>
												</div>
												{!!banner.description && (
													<p
														className='lh-large'
														dangerouslySetInnerHTML={{
															__html: banner.description,
														}}
													></p>
												)}
											</div>
											{!!banner.link && (
												<ButtonCustom
													mode='public'
													size='l'
													style={{
														color: `${banner.buttonTextColor}`,
														backgroundColor: `${banner.buttonBG}`,
													}}
													className='mt-30'
													onClick={() => push(banner.link as string)}
												>
													Перейти к акции
												</ButtonCustom>
											)}
										</div>
									</div>
								</div>
							</div>

							<picture>
								<source
									srcSet={banner.imageSM}
									media={`(max-width: ${SCREEN_SM}px) `}
								/>
								<source
									srcSet={banner.imageMD}
									media={`(max-width: ${SCREEN_LG}px) `}
								/>
								<source
									srcSet={banner.imageLG}
									media={`(max-width: 1920px) `}
								/>
								<Image
									src={banner.imageLG}
									alt={`banner-${banner.title}`}
									className={styles.image_cover}
									loading={index === 0 ? 'eager' : 'lazy'}
									data-swiper-parallax='90%'
									fill
									placeholder='blur'
									blurDataURL={productCardBlur}
									sizes='100vw'
								/>
							</picture>
						</div>
					</SwiperSlide>
				))}
			</Swiper>
		</section>
	);
};
