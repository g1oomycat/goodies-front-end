import { getRouteOrders } from '@/shared/constants/router';
import {
	getAlternates,
	NO_INDEX_PAGE,
	SITE_NAME,
} from '@/shared/constants/seo';
import { Metadata } from 'next';

export const metadata: Metadata = {
	title: `Заказы - «${SITE_NAME}»`,
	description: `Список заказов в интернет-магазине ювелирных украшений и аксессуаров «${SITE_NAME}»`,
	robots: NO_INDEX_PAGE,
	alternates: getAlternates(process.env.NEXT_URL + getRouteOrders()),
};
export default function Layout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return <>{children}</>;
}
