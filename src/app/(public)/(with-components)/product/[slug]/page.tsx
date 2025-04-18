import { IGetAllProductsResponse, IProductsResponse } from '@/entities/product';
import { getRouteProduct } from '@/shared/constants/router';
import {
	INDEX_PAGE,
	SITE_NAME,
	getAlternates,
	getKeywords,
} from '@/shared/constants/seo';
import { ProductCardSection } from '@/widgets/product-card-section';
import { EnumUpSaleSort, UpSaleBlockFetch } from '@/widgets/up-sale-block';
import { Metadata } from 'next';

import { notFound } from 'next/navigation';

export const revalidate = 300;
export const dynamicParams = true; // or false, to 404 on unknown paths

type Props = {
	params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
	// if (process.env.NEXT_PHASE === 'phase-production-build') return {};
	// read route params
	const { slug } = await params;
	// fetch data
	const response = await fetch(`${process.env.BASE_URL}/products/${slug}`);
	if (!response.ok) notFound();

	const product: IProductsResponse = await response.json();

	const title = `${product.name} купить в Алматы по лучшим ценам | «${SITE_NAME}»`;
	const url = process.env.NEXT_URL + getRouteProduct(slug);
	return {
		title,
		description: product.description,
		robots: INDEX_PAGE,
		openGraph: {
			title,
			description: product.description,
			url,
			type: 'website',
			images: [
				{
					url: product.images[0], // URL изображения
					width: 900, // Ширина изображения (например, 1200px)
					height: 900, // Высота изображения (например, 630px)
					alt: product.name, // Альтернативный текст для изображения
					type: 'image/webp',
				},
			],
		},
		twitter: {
			card: 'summary_large_image',
			title,
			description: product.description,
			images: [
				{
					url: product.images[0], // URL изображения
					width: 900, // Ширина изображения (например, 1200px)
					height: 900, // Высота изображения (например, 630px)
					alt: product.name, // Альтернативный текст для изображения
					type: 'image/webp',
				},
			],
		},
		category: product.name,
		alternates: getAlternates(url),
		keywords: getKeywords([product.name, product.category.name]),
	};
}

async function getData(slug: string) {
	try {
		const response = await fetch(`${process.env.BASE_URL}/products/${slug}`);
		if (!response.ok) notFound();

		const product: IProductsResponse = await response.json();
		return product;
	} catch {
		notFound();
	}
}

export async function generateStaticParams() {
	// if (process.env.NEXT_PHASE === 'phase-production-build') return [];

	try {
		const response = await fetch(`${process.env.BASE_URL}/products?limit=0`);
		if (!response.ok) return [];

		const data: IGetAllProductsResponse = await response.json();

		return data.result.map(product => ({ slug: product.slug }));
	} catch {
		return [];
	}
}

export default async function Page({
	params,
}: {
	params: Promise<{ slug: string }>;
}) {
	const slug = (await params).slug;
	const product = await getData(slug);

	return (
		<>
			<ProductCardSection product={product} />
			<UpSaleBlockFetch sort={EnumUpSaleSort.POPULARITY} />
			<UpSaleBlockFetch sort={EnumUpSaleSort.DISCOUNT_AMOUNT} />
		</>
	);
}
