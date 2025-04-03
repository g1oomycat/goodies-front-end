'use server';

import { revalidateTag } from 'next/cache';

export async function revalidateCategory() {
	revalidateTag('categories-catalog');
}
