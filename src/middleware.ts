import { EnumTokens } from '@/shared/config/auth-token/service';
import { jwtDecode } from 'jwt-decode';
import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';
import { EnumUserRole } from './entities/user/types/api';
import {
	getRouteAdminAuth,
	getRouteAdminOrders,
	getRouteMain,
} from './shared/constants/router';

export async function middleware(request: NextRequest) {
	const { url, nextUrl, cookies } = request;
	// Получаем accessToken и refreshToken из cookies
	let refreshToken = cookies.get(EnumTokens.REFRESH_TOKEN)?.value || null;
	let accessToken = cookies.get(EnumTokens.ACCESS_TOKEN)?.value || null;
	//определение редиректа
	let redirectURL = new URL(getRouteMain(), url);
	if (url.includes('/admin/admin')) {
		redirectURL = new URL(getRouteAdminAuth(), url);
		redirectURL.searchParams.set('returnUrl', nextUrl.pathname);
	}

	// Если нет токенов — редирект на главную
	if (!refreshToken && !accessToken) {
		if (url.includes('/admin/auth')) {
			return NextResponse.next();
		} else {
			return NextResponse.redirect(redirectURL);
		}
	}

	let decodedToken: any = null;

	// Проверяем, действителен ли accessToken
	if (accessToken) {
		try {
			decodedToken = jwtDecode(accessToken);
		} catch (error) {
			accessToken = null;
		}
	}

	// Если accessToken истек, пробуем обновить через refreshToken
	if (refreshToken && !accessToken) {
		try {
			const refreshResponse = await fetch(
				`${process.env.BASE_URL}/auth/login/access-token`,
				{
					method: 'POST',
					credentials: 'include',
					headers: {
						'Content-Type': 'application/json',
						Cookie: `refreshToken=${refreshToken};`,
					},
				}
			);
			if (refreshResponse.ok) {
				const data: { accessToken: string } = await refreshResponse.json();
				accessToken = data.accessToken;
				decodedToken = jwtDecode(accessToken);
				// Устанавливаем новый accessToken в куки
				const response = NextResponse.next();

				const expirationTime = new Date(
					new Date().getTime() +
						60 *
							60 *
							1000 *
							(decodedToken?.role !== EnumUserRole.USER ? 0.5 : 1) // +1 час
				);

				response.headers.set(
					'Set-Cookie',
					`accessToken=${accessToken}; Expires=${expirationTime.toUTCString()}; Path=/; Secure; SameSite=None; Domain=${
						process.env.DOMAIN
					}`
				);

				// Декодируем новый токен для проверки роли

				return response;
			} else {
				// Если refresh не удался — удаляем refreshToken и редиректим
				const response = NextResponse.redirect(redirectURL);
				response.cookies.delete(EnumTokens.REFRESH_TOKEN);
				return response;
			}
		} catch (error) {
			const response = NextResponse.redirect(redirectURL);
			response.cookies.delete(EnumTokens.REFRESH_TOKEN);
			return response;
		}
	}
	//редирект со страницы авторизации, если авторизован
	if (
		decodedToken &&
		url.includes('/admin/auth') &&
		decodedToken.role !== EnumUserRole.USER
	) {
		return NextResponse.redirect(new URL(getRouteAdminOrders(), url));
	}
	// Проверяем доступ к админке
	if (url.includes('/admin')) {
		if (!decodedToken || decodedToken.role === EnumUserRole.USER) {
			return NextResponse.redirect(new URL('/', url));
		}
	}

	// Если все условия выполнены, продолжаем обработку запроса
	return NextResponse.next();
}

// Ограничить middleware для определенных роутов
export const config = {
	matcher: [
		`/account/:path*`,
		`/favorites/:path*`,
		`/checkout/:path*`,
		`/orders/:path*`,
		'/admin/:path*',
	],
};
