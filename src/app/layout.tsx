import type { Metadata } from 'next';

import './styles/global.scss';

import { SITE_ICONS, SITE_KEYWORDS } from '@/shared/constants/seo';
import { AuthProvider } from './providers/auth-provider';
import { QueryProvider } from './providers/query-provider';

export const metadata: Metadata = {
	metadataBase: new URL(process.env.NEXT_URL || ''),
	keywords: SITE_KEYWORDS,
	publisher: 'Nasyrov',
	icons: SITE_ICONS,
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang='ru-KZ' suppressHydrationWarning data-theme='light'>
			<head>
				<meta name='mobile-web-app-capable' content='yes' />
				<meta name='apple-mobile-web-app-capable' content='yes' />
				<meta name='msapplication-TileColor' content='#ffffff' />
				<meta
					name='msapplication-TileImage'
					content='/icons/ms-icon-144x144.png'
				/>
			</head>
			<body>
				<QueryProvider>
					<AuthProvider>{children}</AuthProvider>
				</QueryProvider>
			</body>
		</html>
	);
}
