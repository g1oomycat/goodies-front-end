import { IBase, IGetAllBase } from '@/shared/api/types/root.types';

export enum EnumUserRole {
	USER = 'USER',
	ADMIN = 'ADMIN',
	SUPER_ADMIN = 'SUPER_ADMIN',
}
export enum EnumUserGender {
	MALE = 'MALE',
	FEMALE = 'FEMALE',
}

interface IUsersBase {
	firstName?: string;
	lastName?: string;
	surName?: string;
	email: string;
	phone?: string;
	address?: string;
	role: EnumUserRole;
	dateOfBirth?: string;
	gender?: EnumUserGender;
}
export interface IUsersResponse extends IUsersBase, IBase {}

export interface IUsersUpdate extends Partial<Omit<IUsersBase, 'role'>> {}

export interface IUsersCreateByAdmin extends IUsersBase {
	password: string;
}
export interface IUsersUpdateByAdmin extends Partial<IUsersCreateByAdmin> {}

export interface IGetAllUsersResponse extends IGetAllBase {
	result: IUsersResponse[]; // Используем существующий тип для продукта
}
