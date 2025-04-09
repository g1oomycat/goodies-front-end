import NotFound from '@/app/not-found';
import { ICategoriesResponse } from '@/entities/category';
import {
	EnumProductSort,
	EnumProductSortOptionPublic,
	IGetAllProductsResponse,
	sortMapProducts,
} from '@/entities/product';
import { getRouteCategory, getRouteMain } from '@/shared/constants/router';
import {
	getAlternates,
	getKeywords,
	INDEX_PAGE,
	SITE_NAME,
} from '@/shared/constants/seo';
import { getEnumValue } from '@/shared/lib/get-enum-value';
import { EnumParamsSort } from '@/shared/types/sort';
import { CategoryProductSection } from '@/widgets/category-product-section';
import { Metadata } from 'next';
import { redirect } from 'next/navigation';
type Props = {
	params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
	if (process.env.NEXT_PHASE === 'phase-production-build') return {};
	// read route params
	const { slug } = await params;
	// fetch data
	const response = await fetch(`${process.env.BASE_URL}/categories/${slug}`);
	if (!response.ok) {
		NotFound();
	}

	const category: ICategoriesResponse = await response.json();
	const title = `модные ${category.name} купить в Алматы по лучшим ценам | «${SITE_NAME}»`;
	const url = process.env.NEXT_URL + getRouteCategory(slug);
	return {
		title,
		description: category.description,
		robots: INDEX_PAGE,
		openGraph: {
			title,
			description: category.description,
			url,
			type: 'website',
			images: [
				{
					url: category.image, // URL изображения
					width: 900, // Ширина изображения (например, 1200px)
					height: 900, // Высота изображения (например, 630px)
					alt: 'Модные ' + category.name, // Альтернативный текст для изображения
					type: 'image/webp',
				},
			],
		},
		twitter: {
			card: 'summary_large_image',
			title,
			description: category.description,
			images: [
				{
					url: category.image, // URL изображения
					width: 900, // Ширина изображения (например, 1200px)
					height: 900, // Высота изображения (например, 630px)
					alt: 'Модные ' + category.name, // Альтернативный текст для изображения
					type: 'image/webp',
				},
			],
		},

		alternates: getAlternates(url),
		keywords: getKeywords(category.name),
	};
}

const LIMIT_PRODUCTS = 36;

async function getData(
	slug: string,
	sortBy: EnumProductSort,
	sort: EnumParamsSort
) {
	const responseCategory = await fetch(
		`${process.env.BASE_URL}/categories/${slug}`
	);
	if (!responseCategory.ok) NotFound();
	const category: ICategoriesResponse = await responseCategory.json();

	if (!category._count) redirect(getRouteMain());
	const responseProduct = await fetch(
		`${process.env.BASE_URL}/products?categoryId=${category.id}&page=1&limit=${LIMIT_PRODUCTS}&sortBy=${sortBy}&sort=${sort}`
	);

	if (!responseProduct.ok) NotFound();

	const products: IGetAllProductsResponse = await responseProduct.json();
	if (!products.totalResult) redirect(getRouteMain());

	return { category, products };
}

export default async function Page({
	params,
	searchParams,
}: {
	params: Promise<{ slug: string }>;
	searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
	const sortRow = (await searchParams).sort;
	const slug = (await params).slug;
	const sort =
		getEnumValue(EnumProductSortOptionPublic, sortRow) ??
		EnumProductSortOptionPublic.POPULARITY;
	const { sortBy, sort: finalSort } = sortMapProducts[sort];

	const { category, products } = await getData(slug, sortBy, finalSort);

	return (
		<CategoryProductSection
			category={category}
			limit={LIMIT_PRODUCTS}
			initialProducts={products}
		/>
	);
}
