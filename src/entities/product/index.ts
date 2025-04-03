export { adminProductsService, productsService } from './api';

export {
	deliveryAndReturnsMock,
	productsColumns,
	productsRows,
	revalidateProduct,
	sortMapProducts,
	sortOptionsProductsPublic,
	transformAttributes,
} from './lib';
export {
	FullInfoProduct,
	Gallery,
	HorizontalProductCard,
	ProductCard,
	SliderGallery,
} from './ui';

export { EnumProductSort, EnumProductSortOptionPublic } from './types';
export type {
	IGetAllProductsResponse,
	IProductAttributesCreate,
	IProductAttributesResponse,
	IProductForm,
	IProductsCreate,
	IProductsFilter,
	IProductSort,
	IProductsParams,
	IProductsResponse,
	IProductsUpdate,
} from './types';

export {
	createProductAdmin,
	deleteBulkProductAdmin,
	deleteProductAdmin,
	getAdminOneProduct,
	getAllProducts,
	getInfinityAllProducts,
	updateProductAdmin,
} from './model';
