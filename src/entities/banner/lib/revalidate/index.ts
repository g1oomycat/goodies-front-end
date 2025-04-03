'use server';

import { revalidateTag } from 'next/cache';

export async function revalidateBanner() {
	revalidateTag('banners');
}
