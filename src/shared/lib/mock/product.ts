import { IProductsResponse } from '@/entities/product';

export const mockProduct: IProductsResponse = {
	id: '1',
	slug: 'product-1',
	name: 'product-1',
	description: 'product-1',
	purchaseCount: 200,
	stock: 200,
	price: 200,
	discount: 200,
	ordersCount: 150,
	oldPrice: 1200,
	createdAt: '',
	updatedAt: '',
	categoryId: '',
	images: [''],
	category: {
		id: '1',
		slug: 'product-1',
		name: 'product-1',
		description: 'product-1',
		createdAt: '',
		updatedAt: '',
		numberSort: 0,
		image: '',
	},
};
