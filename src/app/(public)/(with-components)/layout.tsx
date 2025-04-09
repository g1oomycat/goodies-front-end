import {
	getAlternates,
	INDEX_PAGE,
	SITE_DESCRIPTION,
	SITE_NAME,
	SITE_TITLE,
} from '@/shared/constants/seo';
import SmoothScroller from '@/shared/lib/Lenis';
import { AuthSideBar } from '@/widgets/auth-side-bar';
import { BurgerMenu } from '@/widgets/burger-menu';
import { CartSideBar } from '@/widgets/cart-side-bar';

import { Footer } from '@/widgets/footer';
import { Header } from '@/widgets/header';
import { Metadata } from 'next';
// const CartSideBar = dynamic(
// 	() => import('@/widgets/cart-side-bar').then(m => m.CartSideBar),
// 	{ ssr: false }
// );

export const revalidate = 40;
export const metadata: Metadata = {
	title: SITE_TITLE,
	description: SITE_DESCRIPTION,
	robots: INDEX_PAGE,
	openGraph: {
		title: SITE_TITLE,
		description: SITE_DESCRIPTION,
		url: process.env.NEXT_URL,
		type: 'website',
		images: [
			{
				url: '/images/opengraph-image.jpg', // URL изображения
				width: 1780, // Ширина изображения (например, 1200px)
				height: 890, // Высота изображения (например, 630px)
				alt: SITE_NAME, // Альтернативный текст для изображения
				type: 'image/jpeg',
			},
		],
	},
	twitter: {
		card: 'summary_large_image',
		title: SITE_TITLE,
		description: SITE_DESCRIPTION,
		images: [
			{
				url: '/images/opengraph-image.jpg', // URL изображения
				width: 1780, // Ширина изображения (например, 1200px)
				height: 890, // Высота изображения (например, 630px)
				alt: SITE_NAME, // Альтернативный текст для изображения
				type: 'image/jpeg',
			},
		],
	},
	alternates: getAlternates(process.env.NEXT_URL as string),
};
export default function Layout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<>
			<Header />
			<main className='main'>{children}</main>
			<Footer />
			<BurgerMenu />
			<CartSideBar />
			<AuthSideBar />
			<SmoothScroller />
		</>
	);
}
