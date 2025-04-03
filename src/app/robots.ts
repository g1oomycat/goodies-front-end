import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
	return {
		rules: [
			{
				userAgent: '*',
				allow: ['/', '/category/', '/product/'],
				disallow: ['/admin/', '/promo/', '/search/', '/account/'],
			},
		],
		sitemap: `${process.env.NEXT_URL}/sitemap.xml`,
	};
}
