import { IGetAllCategoriesResponse } from '@/entities/category';
import { BurgerMenuContent } from './burger-menu-content';

export const revalidate = 3600; // invalidate every hour

async function getData() {
	const res = await fetch(
		`${process.env.NEXT_PUBLIC_BASE_URL}/categories?limit=0&sort=asc&sortBy=numberSort`,
		{
			next: { tags: ['categories-catalog'] },
		}
	);
	return res.json();
}

export async function BurgerMenu() {
	const data: IGetAllCategoriesResponse = await getData();
	if (!data?.result?.length) return null;
	return <BurgerMenuContent data={data} />;
}
