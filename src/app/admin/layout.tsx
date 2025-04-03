import { ToastProvider } from '@/shared/components/toaster';
import { NO_INDEX_PAGE, SITE_NAME } from '@/shared/constants/seo';
import { Metadata } from 'next';
import { ReactNode } from 'react';
import AdminThemeProvider from '../providers/admin/theme';
import '../styles/admin/global.scss';

export const metadata: Metadata = {
	title: `Админ панель - «${SITE_NAME}»`,
	description: `Админ панель для управление сайтом «${SITE_NAME}»`,
	robots: NO_INDEX_PAGE,
	// alternates: getAlternates(process.env.NEXT_URL + getRouteCheckout()),
};

export default function Layout({ children }: { children: ReactNode }) {
	return (
		<AdminThemeProvider>
			<ToastProvider type='classic' />
			<main className='main-admin'>{children}</main>
		</AdminThemeProvider>
	);
}
