import { IGetAllProductsResponse } from '@/entities/product';
import { sortMapUpSale } from '../lib';
import { IUpSaleSort } from '../types';
import { UpSaleBlockContent } from './up-sale-block-content';

export const revalidate = 3600; // invalidate every hour

type Props = { sort: IUpSaleSort };

async function getData(sortBy: string, sort: string) {
	// if (process.env.NEXT_PHASE === 'phase-production-build')
	// 	return { result: [] };
	const res = await fetch(
		`${process.env.BASE_URL}/products?limit=15&sort=${sort}&sortBy=${sortBy}`,
		{
			next: { tags: ['products-up-sale-block'] },
		}
	);
	return res.json();
}

export async function UpSaleBlockFetch({ sort }: Props) {
	const { sortBy, sort: finalSort } = sortMapUpSale[sort];
	const data: IGetAllProductsResponse = await getData(sortBy, finalSort);
	if (!data.result.length) return null;
	return <UpSaleBlockContent data={data.result} sort={sort} />;
}
