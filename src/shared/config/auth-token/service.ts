import { EnumUserRole } from '@/entities/user';
import Cookies from 'js-cookie';

export enum EnumTokens {
	'ACCESS_TOKEN' = 'accessToken',
	'REFRESH_TOKEN' = 'refreshToken',
}

export const getAccessToken = () => {
	const accessToken = Cookies.get(EnumTokens.ACCESS_TOKEN);
	return accessToken || null;
};

export const saveTokenStorage = (accessToken: string, role: EnumUserRole) => {
	const expirationTime = new Date(
		new Date().getTime() +
			0.5 * 60 * 60 * 1000 * (role !== EnumUserRole.USER ? 0.5 : 1)
	);
	Cookies.set(EnumTokens.ACCESS_TOKEN, accessToken, {
		domain: process.env.DOMAIN,
		secure: true, // true в проде, false на локалке
		expires: expirationTime, //1 ч,
		// path: '/',
		sameSite: 'None',
	});
};

export const removeFromStorage = () => {
	Cookies.remove(EnumTokens.ACCESS_TOKEN);
};
