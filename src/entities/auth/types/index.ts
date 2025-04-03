import { IUsersResponse } from '@/entities/user';

export type IAuthForm = {
	email: string;
	password: string;
};

export interface IAuthResponse {
	accessToken: string;
	user: IUsersResponse;
}
