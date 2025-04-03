import { Parallax } from '@/shared/components/parallax-on-scroll';
import { SCREEN_LG, SCREEN_XLG } from '@/shared/ui/break-points';
import cn from 'classnames';
import Image from 'next/image';
import styles from './styles.module.scss';

export const MainCover = () => {
	return (
		<section className={cn(styles.root, '_cont_limit')}>
			<div className={cn(styles.wrapper, 'mb-140')}>
				<Parallax
					children={
						<picture>
							<source
								srcSet={'/images/cover3.webp'}
								media={`(max-width: ${SCREEN_LG}px) `}
							/>
							<source
								srcSet={'/images/cover2.webp'}
								media={`(max-width: ${SCREEN_XLG}px) `}
							/>
							<source
								srcSet={'/images/cover.webp'}
								media={`(max-width: 1920px) `}
							/>
							<Image
								src='/images/cover.webp'
								alt='goodies-perfect'
								className='_image_cover'
								fill
								sizes='100vw'
							/>
						</picture>
					}
				/>
			</div>
		</section>
	);
};
