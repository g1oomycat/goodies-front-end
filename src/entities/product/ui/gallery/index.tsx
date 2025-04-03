import { productCardBlur } from '@/shared/constants/blur-data-url';
import classNames from 'classnames';
import Image from 'next/image';
import styles from './styles.module.scss';

type Props = {
	images: string[];
	alt: string;
};

export const Gallery = ({ images, alt }: Props) => {
	const handleScroll = (id: string) => {
		const targetElement = document.getElementById(id);
		if (targetElement) {
			targetElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
		}
	};
	return (
		<div className={styles.img_column}>
			<div className={styles.gallery}>
				{images.map((item, index) => (
					<div className={classNames(styles.img_product_wrapper)} key={index}>
						<Image
							src={item}
							alt={`${alt} - ${index}`}
							fill={true}
							id={`img-card-${index}`}
							priority={index === 0}
							loading={index === 0 ? 'eager' : 'lazy'}
							sizes='40vw'
							placeholder='blur'
							blurDataURL={productCardBlur}
						/>
					</div>
				))}
			</div>
			<div className={styles.carousel}>
				<div className={styles.sticky_block}>
					{images.map((item, index) => (
						<div
							className={styles.img_product_wrapper}
							key={index}
							onClick={() => handleScroll(`img-card-${index}`)}
						>
							<Image
								src={item}
								alt={`${alt}- мини - ${index}`}
								fill={true}
								sizes='5vw'
								placeholder='blur'
								blurDataURL={productCardBlur}
							/>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};
