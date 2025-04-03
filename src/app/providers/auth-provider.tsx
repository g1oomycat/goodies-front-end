'use client';

import { getUserSelf } from '@/entities/user';
import { PropsWithChildren } from 'react';

export function AuthProvider({ children }: PropsWithChildren) {
	getUserSelf();

	return <>{children}</>;
}
