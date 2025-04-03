'use client';
import { Parallax } from '@/shared/components/parallax-on-scroll';
import { productCardBlur } from '@/shared/constants/blur-data-url';
import { useResize } from '@/shared/hooks/useResize';
import classNames from 'classnames';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { SEOItem } from '../lib/static-text';
import styles from './styles.module.scss';

export const ColumnImage = ({ h2, h3, imageAlt, imgURL }: SEOItem) => {
	const { SCREEN_SM, SCREEN_MD } = useResize();
	const [speed, setSpeed] = useState(100);
	useEffect(() => {
		if (SCREEN_MD) {
			setSpeed(100);
		}
		if (!SCREEN_MD && SCREEN_SM) {
			setSpeed(40);
		}
		if (!SCREEN_SM) {
			setSpeed(15);
		}
	}, [SCREEN_SM, SCREEN_MD]);

	return (
		<div className={styles.column_image}>
			<div className={styles.wrapper_image}>
				<Parallax
					children={
						<Image
							src={imgURL}
							alt={imageAlt}
							className='_image_cover'
							fill
							sizes='33vw'
							placeholder='blur'
							blurDataURL={productCardBlur}
						/>
					}
					speed={speed}
				/>
			</div>
			<div className={styles.info}>
				<h3 className={classNames('mt-25', 'mb-20')}>{h2}</h3>
				<h4>{h3}</h4>
			</div>
		</div>
	);
};
