import { ConfigProvider } from 'antd';
import { PropsWithChildren } from 'react';

export const AntdConfigProvider = ({ children }: PropsWithChildren) => {
	return (
		<ConfigProvider
			theme={{
				token: {
					colorPrimary: '#000',
					borderRadius: 5,
					fontFamily: 'GraphikLCG',
				},
				components: {
					Input: {
						activeShadow: '0 0 0 1px rgba(0, 0, 0, 0.2)',
						paddingBlockLG: 12,
						colorBorder: 'rgba(0, 0, 0, 0.6)',
						errorActiveShadow: '0 0 0 1px rgba(255, 38, 5, 0.1)',
					},
					Form: {
						itemMarginBottom: 30,
						labelFontSize: 12,
					},
					Breadcrumb: {
						colorBgTextHover: 'none',
						lastItemColor: '#000',
						linkHoverColor: 'red',
						fontSize: 18,
					},
					Pagination: {
						itemSize: 40,
						fontSize: 18,
					},
				},
			}}
		>
			{children}
		</ConfigProvider>
	);
};
