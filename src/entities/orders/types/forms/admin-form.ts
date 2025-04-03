import { IOrdersCreateByAdmin } from '../api';

export interface IOrderForm
	extends Omit<IOrdersCreateByAdmin, 'percentDiscount' | 'manualDiscount'> {
	percentDiscount?: string;
	manualDiscount?: string;
}
