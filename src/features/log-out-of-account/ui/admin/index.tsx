'use client';

import { getRouteMain } from '@/shared/constants/router';
import { ButtonCustom } from '@/shared/ui/components/button';
import { useLogout } from '../../model';

export function AdminLogOutOfAccountButton() {
	const { isPending, logoutHandler } = useLogout(true);

	return (
		<ButtonCustom
			size='s'
			colorType='second'
			isLoading={isPending}
			disabled={isPending}
			mode='admin'
			onClick={() => logoutHandler(getRouteMain())}
		>
			выйти
		</ButtonCustom>
	);
}
