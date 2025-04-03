import { IGetAllReviewsInstResponse } from '@/entities/reviews-inst';
import { InstagramSliderContent } from './inst-slider-content';

async function getData() {
	const res = await fetch(
		`${process.env.NEXT_PUBLIC_BASE_URL}/reviews-instagram?limit=12&sort=desc&sortBy=position`,
		{
			next: { tags: ['reviews-inst-slider'] },
		}
	);
	return res.json();
}

export async function InstSlider() {
	const data: IGetAllReviewsInstResponse = await getData();
	if (!data.result.length) return null;
	return <InstagramSliderContent data={data.result} />;
}
