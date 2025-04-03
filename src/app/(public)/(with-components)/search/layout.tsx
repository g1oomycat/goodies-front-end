import { getAlternates } from '@/shared/constants/seo';
import { Metadata } from 'next';

export const metadata: Metadata = {
	robots: {
		index: false, // NOINDEX
		follow: true, // FOLLOW
	},
	alternates: getAlternates(process.env.NEXT_URL + '/search'),
};
export default function Layout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return <>{children}</>;
}
