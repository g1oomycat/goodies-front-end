import { IOrdersCreate } from '../api';

export interface IOrderCreateForm extends Omit<IOrdersCreate, 'orderItems'> {
	accept: boolean;
}
