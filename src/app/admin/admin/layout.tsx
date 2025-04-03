'use client';

import { ReactNode } from 'react';

import { MenuSidebar } from '@/widgets/admin-menu-side-bar';

import { AdminFooter } from '@/widgets/admin-footer';
import { Header } from '@/widgets/admin-header';
import styles from './styles.module.scss';

export default function Layout({ children }: { children: ReactNode }) {
	return (
		<div className={styles.root}>
			<MenuSidebar />
			<div className={styles.children}>
				<Header />
				{children}
				<AdminFooter />
			</div>
		</div>
	);
}
