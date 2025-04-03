'use client';
import { getAllProducts } from '@/entities/product';
import { sortMapUpSale } from '../lib';
import { IUpSaleSort } from '../types';
import { UpSaleBlockContent } from './up-sale-block-content';

type Props = { sort: IUpSaleSort };

export function UpSaleBlockClientFetch({ sort }: Props) {
	const { sortBy, sort: finalSort } = sortMapUpSale[sort];
	const { data } = getAllProducts({ sortBy, sort: finalSort, limit: 15 });
	if (!data?.result.length) return null;
	return <UpSaleBlockContent data={data.result} sort={sort} />;
}
