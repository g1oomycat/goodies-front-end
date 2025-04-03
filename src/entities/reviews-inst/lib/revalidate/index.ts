'use server';

import { revalidateTag } from 'next/cache';

export async function revalidateReviewsInst() {
	revalidateTag('reviews-inst-slider');
}
