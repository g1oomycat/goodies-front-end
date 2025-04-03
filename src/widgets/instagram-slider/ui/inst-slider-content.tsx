'use client';

import { IReviewsInstResponse, ReviewsInstCard } from '@/entities/reviews-inst';
import { LinkCustom } from '@/shared/ui/components/link';
import classNames from 'classnames';
import { Swiper, SwiperSlide } from 'swiper/react';
import { instagramSliderConfig } from '../lib/config-slider';
import styles from './styles.module.scss';
type Props = {
	data: IReviewsInstResponse[];
};
export const InstagramSliderContent = ({ data }: Props) => {
	return (
		<section className={'mb-160'}>
			<div className={styles.body}>
				<div className={classNames(styles.header, 'mb-60 _cont_limit')}>
					<div className={classNames(styles.title_web, 'web-md')}>
						<p className='fs-xxl-1 lh-no ' style={{ textWrap: 'nowrap' }}>
							<span>goodies</span> <span>girls</span>
						</p>
					</div>
					<div className={styles.subtitle}>
						<div className={classNames(styles.title_mob, 'mob-md')}>
							<p className='fs-xxl-1 lh-no' style={{ textWrap: 'nowrap' }}>
								<span>goodies</span> <span>girls</span>
							</p>
						</div>
						<div className={'fs-m-1 web-md'} style={{ fontStyle: 'italic' }}>
							[ОТМЕЧАЙТЕ НАС]
						</div>
						<div className={'fs-m-1'}>
							<LinkCustom
								href='https://www.instagram.com/nazymkurbanova/tagged/'
								style={{ fontStyle: 'italic' }}
							>
								Смотреть Все
							</LinkCustom>
						</div>
					</div>
				</div>
				<div className={classNames(styles.wrapper_slider, '_cont_limit')}>
					<Swiper {...instagramSliderConfig()} className={styles.swiper}>
						{data.map(item => (
							<SwiperSlide key={item.id} className={styles.slide}>
								<ReviewsInstCard data={item} />
							</SwiperSlide>
						))}
					</Swiper>
				</div>
			</div>
		</section>
	);
};
