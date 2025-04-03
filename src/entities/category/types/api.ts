import { IBase, IGetAllBase } from '@/shared/api/types/root.types';

export enum EnumAttribute {
	STRING = 'STRING',
	NUMBER = 'NUMBER',
	BOOLEAN = 'BOOLEAN',
	SELECT = 'SELECT',
}
interface ICountProduct {
	products: number;
}

export interface ICategoryAttributeCreate {
	name: string;
	type: EnumAttribute;
	filterable?: boolean;
	options?: string[];
}
export interface ICategoryAttributeResponse
	extends IBase,
		ICategoryAttributeCreate {
	categoryId: string;
}

export interface ICategoriesCreate {
	name: string;
	description: string;
	image: string;
	attributes: ICategoryAttributeCreate[];
	numberSort?: number;
}
export interface ICategoriesUpdate extends Partial<ICategoriesCreate> {}
export interface ICategoriesResponse
	extends IBase,
		Required<Omit<ICategoriesUpdate, 'attributes'>> {
	slug: string;
	_count?: ICountProduct;
	attributes?: ICategoryAttributeResponse[];
}
export interface IGetAllCategoriesResponse extends IGetAllBase {
	result: Array<ICategoriesResponse>;
}
