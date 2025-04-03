import { IProductsResponse } from '@/entities/product';
import { IBase, IGetAllBase } from '@/shared/api/types/root.types';

export enum EnumOrderType {
	CART = 'CART',
	CHECKOUT = 'CHECKOUT',
	ORDER = 'ORDER',
}
export enum EnumPaymentMethod {
	TRANSFER = 'TRANSFER',
	KASPI = 'KASPI',
}

export enum EnumDeliveryMethod {
	YANDEX = 'YANDEX',
	KAZPOCHTA = 'KAZPOCHTA',
}

export enum EnumOrderStatus {
	CREATED = 'CREATED',
	PROCESSING = 'PROCESSING',
	AWAITING_PAYMENT = 'AWAITING_PAYMENT',
	PAID = 'PAID',
	AWAITING_SHIPMENT = 'AWAITING_SHIPMENT',
	SHIPPED = 'SHIPPED',
	DELIVERED = 'DELIVERED',
	COMPLETED = 'COMPLETED',
	AWAITING_RETURN = 'AWAITING_RETURN',
	RETURNED = 'RETURNED',
	RETURN_PROCESSED = 'RETURN_PROCESSED',
	CANCELLED = 'CANCELLED',
}
interface IUserInfo {
	firstName: string;
	lastName: string;
	email: string;
	phone: string;
}
export interface IOrderItemCreate {
	quantity: number;
	unitPrice: number;
	productId: string;
	orderId: string;
	discount: number;
}
export interface IOrderItemBulkCreate
	extends Omit<IOrderItemCreate, 'orderId'> {}

export interface IOrderItemResponse extends IOrderItemCreate, IBase {
	totalPrice: number;
	totalDiscount: number;
	originalPrice: number;
	totalOriginalPrice: number;
	product: IProductsResponse;
}
export interface IOrderStatusHistoryResponse {
	orderId: string;
	id: string;
	changedAt: string;
	status: EnumOrderStatus;
}

export interface IOrdersCreate {
	address: string;
	comment?: string;
	deliveryMethod: EnumDeliveryMethod;
	paymentMethod: EnumPaymentMethod;
	userInfo: IUserInfo;
	orderItems: IOrderItemBulkCreate[];
}
export interface IOrdersCreateByAdmin extends IOrdersCreate {
	percentDiscount?: number;
	manualDiscount?: number;
	status?: EnumOrderStatus;
	expectedDate?: string;
}

export interface IOrdersUpdateByAdmin extends Partial<IOrdersCreateByAdmin> {}

export interface IOrdersResponse
	extends Omit<
			IOrdersCreateByAdmin,
			| 'orderItems'
			| 'status'
			| 'manualDiscount'
			| 'percentDiscount'
			| 'expectedDate'
		>,
		IBase {
	status: EnumOrderStatus;
	total: number;
	discount: number;
	manualDiscount: number;
	percentDiscount: number;
	originalTotal: number;
	type: EnumOrderType;
	quantity: number;
	publicId: string;
	completed: boolean;
	expectedDate: string;
	completedDate?: string;
	userInfoId: string;
	orderItems: IOrderItemResponse[];
	orderStatusHistory?: IOrderStatusHistoryResponse[];
}

export interface IGetAllOrdersResponse extends IGetAllBase {
	result: IOrdersResponse[];
}
