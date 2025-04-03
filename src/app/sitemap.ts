import { categoriesService } from '@/entities/category';
import { productsService } from '@/entities/product';
import { getRouteCategory, getRouteProduct } from '@/shared/constants/router';
import type { MetadataRoute } from 'next';

export const revalidate = 300;

const BASE_URL = process.env.NEXT_URL as string;

async function getData() {
	try {
		const [categoriesData, productsData] = await Promise.all([
			categoriesService.getCategories({ limit: 0 }),
			productsService.getProducts({ limit: 0, isLowStock: false }),
		]);
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
		url: `${BASE_URL}${getRouteCategory(item.slug)}`,
		lastModified: formatDate,
		changeFrequency: 'daily',
		priority: 0.8,
		images: [item.image],
	}));

	const products: MetadataRoute.Sitemap = productsData.result.map(item => ({
		url: `${BASE_URL}${getRouteProduct(item.slug)}`,
		lastModified: formatDate,
		changeFrequency: 'daily',
		priority: 0.7,
		images: item.images,
	}));
	return [
		{
			url: BASE_URL,
			lastModified: new Date(),
			changeFrequency: 'yearly',
			priority: 1,
		},

		...categories,
		...products,
	];
}
