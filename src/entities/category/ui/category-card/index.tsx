import { categoryCardBlur } from '@/shared/constants/blur-data-url';

import { getRouteCategory } from '@/shared/constants/router';
import cn from 'classnames';
import Image from 'next/image';
import Link from 'next/link';
import { ICategoriesResponse } from '../../types/api';
import styles from './styles.module.scss';

type Props = {
	data: ICategoriesResponse;
};
export const CategoryCard = ({ data }: Props) => {
	return (
		<div className={cn(styles.root)}>
			<Link href={getRouteCategory(data.slug)} className={styles.body}>
				<div className={styles.wrapper_image}>
					<div className={styles.image}>
						<Image
							src={data.image}
							alt={data.name}
							className='_image_cover'
							height={250}
							width={250}
							placeholder='blur'
							blurDataURL={categoryCardBlur}
							sizes='(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, (max-width: 1536px) 25vw, (max-width: 1920px) 14vw, 14vw'
						/>
					</div>
				</div>
				<div
					className='fs-up-3 mt-15 lh-medium'
					style={{ textAlign: 'center' }}
				>
					{data.name}
				</div>
			</Link>
		</div>
	);
};
