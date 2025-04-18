import { IGetAllCategoriesResponse } from '@/entities/category';
import { CategoryContent } from './category-content';

export const revalidate = 3600; // invalidate every hour

async function getData() {
	// if (process.env.NEXT_PHASE === 'phase-production-build')
	// 	return { result: [] };
	const res = await fetch(
		`${process.env.BASE_URL}/categories?limit=14&sort=desc&sortBy=countProduct`,
		{
			next: { tags: ['categories-slider'] },
		}
	);
	return res.json();
}

export async function CategorySlider() {
	const data: IGetAllCategoriesResponse = await getData();
	if (!data.result.length) return null;
	return <CategoryContent data={data.result} />;
}
