import { CartProvider } from '@/app/providers/cart-provider';
import theme from '@/app/providers/mui-config-theme-providers';
import { FavoritesProvider } from '@/entities/favorites';
import { ToastProvider } from '@/shared/components/toaster';
import { ThemeProvider } from '@mui/material';
import { AntdConfigProvider } from '../providers/antd-config-provider';
import { ResetModals } from '../providers/modals';

export default function Layout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<CartProvider>
			<FavoritesProvider>
				<ThemeProvider theme={theme}>
					<AntdConfigProvider>
						<ResetModals>
							{children}
							<ToastProvider type='custom' />
						</ResetModals>
					</AntdConfigProvider>
				</ThemeProvider>
			</FavoritesProvider>
		</CartProvider>
	);
}
