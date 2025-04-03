'use client';

import { getRouteMain } from '@/shared/constants/router';
import { ButtonCustom } from '@/shared/ui/components/button';
import { ReactNode } from 'react';
import { useLogout } from '../../model';

type Props = {
	children: ReactNode;
};

export function LogOutOfAccountButton({ children }: Props) {
	const { logoutHandler, isPending } = useLogout(false);

	return (
		<ButtonCustom
			colorType='none'
			disabled={isPending}
			onClick={() => logoutHandler(getRouteMain())}
		>
			{children}
		</ButtonCustom>
	);
}
