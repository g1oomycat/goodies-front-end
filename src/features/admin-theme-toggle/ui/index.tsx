'use client';

import { ButtonIcon } from '@/shared/ui/components/button-icon';
import { MoonIcon } from '@/shared/ui/icons/moon';
import { SunIcon } from '@/shared/ui/icons/sun';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

type Props = {
	height?: number;
};

export const ThemeToggle = ({ height }: Props) => {
	const { theme, setTheme } = useTheme();
	const [mounted, setMounted] = useState(false);

	// Ждем монтирования на клиенте, чтобы избежать ошибки гидратации
	useEffect(() => {
		setMounted(true);
	}, []);

	if (!mounted) return null;

	return (
		<ButtonIcon onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}>
			{theme === 'dark' ? (
				<MoonIcon height={height} />
			) : (
				<SunIcon height={height} />
			)}
		</ButtonIcon>
	);
};
