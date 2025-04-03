import { IProductsCreate } from '../api';

export type IProductForm = Omit<
	IProductsCreate,
	'attributes' | 'images' | 'stock' | 'price'
> & {
	attributes: { [key: string]: { value: any } };
	images: { id: string; file?: File }[];
	stock?: string;
	price?: string;
};
