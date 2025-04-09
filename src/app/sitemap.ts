import { IGetAllCategoriesResponse } from '@/entities/category';
import { IGetAllProductsResponse } from '@/entities/product';
import { getRouteCategory, getRouteProduct } from '@/shared/constants/router';
import type { MetadataRoute } from 'next';

export const revalidate = 300;

const URL = process.env.NEXT_URL as string;

async function getData() {
	try {
		if (process.env.NEXT_PHASE === 'phase-production-build') {
			return { categoriesData: { result: [] }, productsData: { result: [] } }; // 🚫 не дергаем базу во время билда
		}
		const [responseCategories, responseProducts] = await Promise.all([
			fetch(`${process.env.BASE_URL}/categories?limit=0`),
			fetch(`${process.env.BASE_URL}/products?limit=0`),
		]);

		const categoriesData: IGetAllCategoriesResponse =
			await responseCategories.json();
		const productsData: IGetAllProductsResponse = await responseProducts.json();
		return { categoriesData, productsData };
	} catch (error) {
		console.error('Ошибка при получении данных для sitemap:', error);
		return { categoriesData: { result: [] }, productsData: { result: [] } };
	}
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
	const { categoriesData, productsData } = await getData();
	const formatDate = new Date().toISOString();
	const categories: MetadataRoute.Sitemap = categoriesData.result.map(item => ({
		url: `${URL}${getRouteCategory(item.slug)}`,
		lastModified: formatDate,
		changeFrequency: 'daily',
		priority: 0.8,
		images: [item.image],
	}));

	const products: MetadataRoute.Sitemap = productsData.result.map(item => ({
		url: `${URL}${getRouteProduct(item.slug)}`,
		lastModified: formatDate,
		changeFrequency: 'daily',
		priority: 0.7,
		images: item.images,
	}));
	return [
		{
			url: URL,
			lastModified: new Date(),
			changeFrequency: 'yearly',
			priority: 1,
		},

		...categories,
		...products,
	];
}
