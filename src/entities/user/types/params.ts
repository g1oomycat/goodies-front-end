import { IParamsSort } from '@/shared/types/sort';
import { EnumUserRole } from './api';
export enum EnumSortUsers {
	CREATED_AT = 'createdAt',
	UPDATED_AT = 'updatedAt',
	USER_ID = 'userId',
	EMAIL = 'email',
	FIRST_NAME = 'firstName',
	LAST_NAME = 'lastName',
	PHONE = 'phone',
	ROLE = 'role',
}

export type ISortUsers =
	| 'createdAt'
	| 'updatedAt'
	| 'userId'
	| 'email'
	| 'firstName'
	| 'lastName'
	| 'phone'
	| 'role';

export interface IUsersParams {
	firstName?: string;
	lastName?: string;
	phone?: string;
	email?: string;
	limit?: number;
	page?: number;
	role?: EnumUserRole;
	sort?: IParamsSort;
	sortBy?: ISortUsers;
}
