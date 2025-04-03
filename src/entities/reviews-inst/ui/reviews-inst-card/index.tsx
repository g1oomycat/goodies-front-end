import { LinkCustom } from '@/shared/ui/components/link';
import classNames from 'classnames';
import Image from 'next/image';
import { IReviewsInstResponse } from '../../types';
import styles from './styles.module.scss';

type Props = {
	data: IReviewsInstResponse;
};
export const ReviewsInstCard = ({ data }: Props) => {
	return (
		<div className={classNames(styles.rootCard, 'fs-s-3')}>
			<p>{data.name}</p>
			<LinkCustom
				href={`https://www.instagram.com/${data.nick}`}
				className='mt-5 up fw-500'
			>
				@{data.nick}
			</LinkCustom>
			<div className={classNames(styles.wrapper_image, 'mt-15')}>
				<Image
					src={data.image}
					alt={`inst-${data.nick}`}
					width={500} // Условная ширина, Next.js подстроит
					height={600} // Условная высота, Next.js подстроит
					sizes='(max-width: 640px) 90w, (max-width: 1024px) 40vw, 25vw'
					style={{ width: '100%', height: 'auto' }} // Делаем адаптивным
				/>
			</div>
		</div>
	);
};
