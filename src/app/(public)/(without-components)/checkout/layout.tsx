import LoadingGlobal from '@/shared/components/loading-global';
import { NO_INDEX_PAGE, SITE_NAME } from '@/shared/constants/seo';
import { FooterCheckout } from '@/widgets/footer-checkout';
import { HeaderCheckout } from '@/widgets/header-checkout';
import { Metadata } from 'next';

export const metadata: Metadata = {
	title: `Оформление заказа - «${SITE_NAME}»`,
	description: `Оформление заказа в интернет-магазине ювелирных украшений и аксессуаров «${SITE_NAME}»`,
	robots: NO_INDEX_PAGE,
	// alternates: getAlternates(process.env.NEXT_URL + getRouteCheckout()),
};

export default function Layout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<>
			<HeaderCheckout />
			<main className='main'>{children}</main>
			<FooterCheckout />
			<LoadingGlobal />
		</>
	);
}
