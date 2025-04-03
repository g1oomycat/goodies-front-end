import { IGetAllBannerResponse } from '@/entities/banner';
import { BannerContent } from './banner-content';

export const revalidate = 3600; // invalidate every hour

async function getData() {
	const res = await fetch(
		`${process.env.NEXT_PUBLIC_BASE_URL}/banners?limit=8&sort=desc&sortBy=position&isActive=y`,
		{
			next: { tags: ['banners'] },
		}
	);
	return res.json();
}

export async function Banner() {
	const data: IGetAllBannerResponse = await getData();
	if (!data.result.length) return null;
	return <BannerContent data={data.result} />;
}
