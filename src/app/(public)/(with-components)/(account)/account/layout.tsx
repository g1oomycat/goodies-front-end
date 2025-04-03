import { getRouteAccount } from '@/shared/constants/router';
import {
	getAlternates,
	NO_INDEX_PAGE,
	SITE_NAME,
} from '@/shared/constants/seo';
import { Metadata } from 'next';

export const metadata: Metadata = {
	title: `Профиль - «${SITE_NAME}»`,
	description: `Данные учетной записи в интернет-магазине ювелирных украшений и аксессуаров «${SITE_NAME}»`,
	robots: NO_INDEX_PAGE,
	alternates: getAlternates(process.env.NEXT_URL + getRouteAccount()),
};
export default function Layout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return <>{children}</>;
}
