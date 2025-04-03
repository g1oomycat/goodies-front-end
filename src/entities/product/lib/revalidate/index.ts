'use server';

import { revalidatePath, revalidateTag } from 'next/cache';

export async function revalidateProduct(slug?: string) {
	if (slug) {
		revalidatePath(`/product/${slug}`);
	}
	revalidateTag('products-up-sale-block');
}
