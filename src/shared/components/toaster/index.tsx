'use client';
import { useTheme } from 'next-themes';
import { Toaster, ToasterProps } from 'sonner';
import styles from './styles.module.scss';

type Props = {
	type?: 'classic' | 'custom';
};

export const ToastProvider = ({ type = 'classic' }: Props) => {
	const { resolvedTheme } = useTheme();

	return (
		<Toaster
			position={type === 'classic' ? 'top-center' : 'top-right'}
			theme={
				type === 'classic' ? (resolvedTheme as ToasterProps['theme']) : 'light'
			}
			richColors={type === 'classic'}
			toastOptions={
				type === 'custom' ? { className: styles.my_toast, unstyled: true } : {}
			}
			offset={type === 'custom' ? { right: '0rem', top: '8rem' } : undefined}
		/>
	);
};
