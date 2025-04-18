import { IGetAllReviewsInstResponse } from '@/entities/reviews-inst';
import { InstagramSliderContent } from './inst-slider-content';

async function getData() {
	// if (process.env.NEXT_PHASE === 'phase-production-build')
	// 	return { result: [] };
	const res = await fetch(
		`${process.env.BASE_URL}/reviews-instagram?limit=12&sort=desc&sortBy=position`,
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
