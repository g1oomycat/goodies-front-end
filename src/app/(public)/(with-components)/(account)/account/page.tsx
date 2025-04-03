'use client';

import { useAuthStore } from '@/shared/config/auth-store';
import { useLoadingGlobalStore } from '@/shared/config/loading-global-store';
import { Account } from '@/widgets/account';
import { useEffect } from 'react';

export default function Page() {
	const { data, isLoading } = useAuthStore();
	const { setLoading } = useLoadingGlobalStore();

	useEffect(() => {
		if (!isLoading && data) setLoading(false);
	}, [data, isLoading]);

	if (!data) return <></>;

	return <Account userData={data} />;
}
