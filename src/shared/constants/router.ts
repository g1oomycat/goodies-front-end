import { buildUrlParams } from '../lib/build-url-params';

type QueryParams = Record<string, string | number | boolean>;
// Определение маршрутов
export enum AppRoutes {
	MAIN = 'main',
	PRODUCT = 'product',
	CATEGORY = 'category',
	NEWS = 'news',
	NEWS_DETAILS = 'news_details',
	CART = 'cart',
	FAVORITES = 'favorites',
	ORDERS = 'orders',
	ACCOUNT = 'account',
	SEARCH = 'search',
	CHECKOUT = 'checkout',
	CHECKOUT_SUCCESS = 'checkout_success',
	PROMOTIONS = 'promotions',
	PROMOTION_DETAILS = 'promotion_details',
	NOT_FOUND = 'not_found',

	ADMIN_AUTH = 'admin_auth',
	ADMIN_ADMIN_DASHBOARD = 'admin_admin_dashboard',
	ADMIN_ADMIN_USERS = 'admin_admin_users',
	ADMIN_ADMIN_CATEGORIES = 'admin_admin_categories',
	ADMIN_ADMIN_ORDERS = 'admin_admin_orders',
	ADMIN_ADMIN_PRODUCTS = 'admin_admin_products',
	ADMIN_ADMIN_PRICE_HISTORY = 'admin_admin_price_history',
	ADMIN_ADMIN_BANNERS = 'admin_admin_banners',
	ADMIN_ADMIN_REVIEWS_INSTAGRAM = 'admin_admin_reviews_instagram',
	ADMIN_ADMIN_PRODUCT_CREATE = 'admin_admin_product_create',
	ADMIN_ADMIN_PRODUCT_EDIT = 'admin_admin_product_edit',
	ADMIN_ADMIN_USER_CREATE = 'admin_admin_user_create',
	ADMIN_ADMIN_USER_EDIT = 'admin_admin_user_edit',
	ADMIN_ADMIN_CATEGORY_CREATE = 'admin_admin_category_create',
	ADMIN_ADMIN_CATEGORY_EDIT = 'admin_admin_category_edit',
	ADMIN_ADMIN_ORDER_CREATE = 'admin_admin_order_create',
	ADMIN_ADMIN_ORDER_EDIT = 'admin_admin_order_edit',
	ADMIN_ADMIN_BANNER_CREATE = 'admin_admin_banner_create',
	ADMIN_ADMIN_BANNER_EDIT = 'admin_admin_banner_edit',
	ADMIN_ADMIN_REVIEW_INSTAGRAM_CREATE = 'admin_admin_review_instagram_create',
	ADMIN_ADMIN_REVIEW_INSTAGRAM_EDIT = 'admin_admin_review_instagram_edit',
}

// Функция для добавления query-параметров в URL
const addQueryParams = (baseUrl: string, params?: QueryParams) => {
	if (!params) return baseUrl;
	const queryString = new URLSearchParams(buildUrlParams(params)).toString();
	return queryString ? `${baseUrl}?${queryString}` : baseUrl;
};

// Функции для получения маршрутов
export const getRouteMain = () => '/';
export const getRouteProduct = (productSlug: string) =>
	`/product/${productSlug}`;
export const getRouteCategory = (productSlug: string) =>
	`/category/${productSlug}`;
export const getRouteNews = () => '/news';
export const getRouteNewsDetails = (newsSlug: string) => `/news/${newsSlug}`;
export const getRouteCart = () => '/cart';
export const getRouteFavorites = () => `/favorites`;
export const getRouteOrders = () => `/orders`;
export const getRouteAccount = () => '/account';
export const getRouteAdminPanel = () => '/admin';
export const getRouteCheckout = () => '/checkout';
export const getRouteCheckoutSuccess = (order: string) =>
	`/checkout/success?order=${order}`;
export const getRoutePromotions = () => '/promotions';
export const getRouteSearch = (q: string) => `/search?q=${q}`;
export const getRoutePromotionDetails = (promotionSlug: string) =>
	`/promotions/${promotionSlug}`;

export const getRouteAdminAuth = () => '/admin/auth';
export const getRouteAdminDashboard = () => '/admin/admin/dashboard';
export const getRouteAdminUsers = () => '/admin/admin/users';
export const getRouteAdminCategories = () => '/admin/admin/categories';
export const getRouteAdminOrders = () => '/admin/admin/orders';
export const getRouteAdminProducts = () => '/admin/admin/products';
export const getRouteAdminPriceHistory = () => '/admin/admin/price-history';
export const getRouteAdminBanners = () => '/admin/admin/banners';
export const getRouteAdminReviewsInstagram = () =>
	'/admin/admin/reviews-instagram';

export const getRouteAdminProductCreate = () => '/admin/admin/products/create';
export const getRouteAdminProductEdit = (id: string) =>
	`/admin/admin/products/edit/${id}`;
export const getRouteAdminUserCreate = () => '/admin/admin/users/create';
export const getRouteAdminUserEdit = (id: string) =>
	`/admin/admin/users/edit/${id}`;
export const getRouteAdminCategoryCreate = () =>
	'/admin/admin/categories/create';
export const getRouteAdminCategoryEdit = (id: string) =>
	`/admin/admin/categories/edit/${id}`;
export const getRouteAdminOrderCreate = () => '/admin/admin/orders/create';
export const getRouteAdminOrderEdit = (id: string) =>
	`/admin/admin/orders/edit/${id}`;
export const getRouteAdminBannerCreate = () => '/admin/admin/banners/create';
export const getRouteAdminBannerEdit = (id: string) =>
	`/admin/admin/banners/edit/${id}`;
export const getRouteAdminReviewInstagramCreate = () =>
	'/admin/admin/reviews-instagram/create';
export const getRouteAdminReviewInstagramEdit = (id: string) =>
	`/admin/admin/reviews-instagram/edit/${id}`;

export const getRouteNotFound = () => '*';

// Сопоставление маршрутов с их типами
export const AppRouterByPathPattern: Record<string, AppRoutes> = {
	[getRouteMain()]: AppRoutes.MAIN,
	[getRouteProduct(':productSlug')]: AppRoutes.PRODUCT,
	[getRouteCategory(':categorySlug')]: AppRoutes.CATEGORY,
	[getRouteNews()]: AppRoutes.NEWS,
	[getRouteNewsDetails(':newsSlug')]: AppRoutes.NEWS_DETAILS,
	[getRouteCart()]: AppRoutes.CART,
	[getRouteFavorites()]: AppRoutes.FAVORITES,
	[getRouteOrders()]: AppRoutes.ORDERS,
	[getRouteAccount()]: AppRoutes.ACCOUNT,

	[getRouteCheckout()]: AppRoutes.CHECKOUT,
	[getRoutePromotions()]: AppRoutes.PROMOTIONS,
	[getRoutePromotionDetails(':promotionSlug')]: AppRoutes.PROMOTION_DETAILS,
	[getRouteAdminAuth()]: AppRoutes.ADMIN_AUTH,
	[getRouteAdminDashboard()]: AppRoutes.ADMIN_ADMIN_DASHBOARD,
	[getRouteAdminUsers()]: AppRoutes.ADMIN_ADMIN_USERS,
	[getRouteAdminCategories()]: AppRoutes.ADMIN_ADMIN_CATEGORIES,
	[getRouteAdminOrders()]: AppRoutes.ADMIN_ADMIN_ORDERS,
	[getRouteAdminProducts()]: AppRoutes.ADMIN_ADMIN_PRODUCTS,
	[getRouteAdminBanners()]: AppRoutes.ADMIN_ADMIN_BANNERS,
	[getRouteAdminReviewsInstagram()]: AppRoutes.ADMIN_ADMIN_REVIEWS_INSTAGRAM,
	[getRouteAdminProductCreate()]: AppRoutes.ADMIN_ADMIN_PRODUCT_CREATE,
	[getRouteAdminProductEdit(':id')]: AppRoutes.ADMIN_ADMIN_PRODUCT_EDIT,
	[getRouteAdminUserCreate()]: AppRoutes.ADMIN_ADMIN_USER_CREATE,
	[getRouteAdminUserEdit(':id')]: AppRoutes.ADMIN_ADMIN_USER_EDIT,
	[getRouteAdminCategoryCreate()]: AppRoutes.ADMIN_ADMIN_CATEGORY_CREATE,
	[getRouteAdminCategoryEdit(':id')]: AppRoutes.ADMIN_ADMIN_CATEGORY_EDIT,
	[getRouteAdminOrderCreate()]: AppRoutes.ADMIN_ADMIN_ORDER_CREATE,
	[getRouteAdminOrderEdit(':id')]: AppRoutes.ADMIN_ADMIN_ORDER_EDIT,
	[getRouteAdminBannerCreate()]: AppRoutes.ADMIN_ADMIN_BANNER_CREATE,
	[getRouteAdminBannerEdit(':id')]: AppRoutes.ADMIN_ADMIN_BANNER_EDIT,
	[getRouteAdminReviewInstagramCreate()]:
		AppRoutes.ADMIN_ADMIN_REVIEW_INSTAGRAM_CREATE,
	[getRouteAdminReviewInstagramEdit(':id')]:
		AppRoutes.ADMIN_ADMIN_REVIEW_INSTAGRAM_EDIT,
};
