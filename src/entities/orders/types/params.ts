import { IParamsSort } from '@/shared/types/sort';
import { EnumDeliveryMethod, EnumOrderStatus, EnumPaymentMethod } from './api';

export enum EnumOrderSortOptionPublic {
	TOTAL_ASC = 'totalAsc',
	TOTAL_DESC = 'totalDesc',
	NEW = 'new',
}

export enum EnumOrdersSort {
	TOTAL = 'total',
	PUBLIC_ID = 'publicId',
	QUANTITY = 'quantity',
	STATUS = 'status',
	DELIVERY_METHOD = 'deliveryMethod',
	PAYMENT_METHOD = 'paymentMethod',
	CREATED_AT = 'createdAt',
	UPDATED_AT = 'updatedAt',
}
export type IOrdersSort =
	| 'total'
	| 'publicId'
	| 'quantity'
	| 'status'
	| 'deliveryMethod'
	| 'paymentMethod'
	| 'createdAt'
	| 'updatedAt';

export interface IOrderParams {
	userId?: string;
	publicId?: string;
	email?: string;
	phone?: string;
	deliveryMethod?: EnumDeliveryMethod;
	paymentMethod?: EnumPaymentMethod;
	status?: EnumOrderStatus;
	page?: number;
	limit?: number;
	sortBy?: IOrdersSort;
	sort?: IParamsSort;
}
