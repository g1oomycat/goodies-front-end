'use client';
import { ThemeProvider as MUIThemeProvider } from '@mui/material/styles';
import { ThemeProvider as NextThemesProvider } from 'next-themes';
import adminTheme from './mui-theme';

export default function AdminThemeProvider({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<NextThemesProvider attribute='data-theme' defaultTheme='system'>
			<MUIThemeProvider theme={adminTheme}>{children}</MUIThemeProvider>
		</NextThemesProvider>
	);
}
