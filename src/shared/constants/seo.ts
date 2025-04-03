export const getAlternates = (url: string | URL) => ({
	canonical: url,
	languages: {
		'ru-KZ': url,
		'x-default': url,
	},
});
export const getKeywords = (keywords: string | string[]) => {
	// Преобразуем входные ключевые слова в массив, если это строка
	const newKeywords = Array.isArray(keywords) ? keywords : [keywords];

	// Объединяем новые ключевые слова с базовыми, новые будут впереди
	const allKeywords = [...newKeywords, ...BASE_KEYWORDS];

	// Возвращаем массив ключевых слов
	return allKeywords;
};
export const NO_INDEX_PAGE = { index: false, follow: false };
export const INDEX_PAGE = { index: true, follow: true };
export const SITE_NAME = 'Goodies';
export const SITE_TITLE = `Goodies - купить ювелирные украшения и аксессуары в интернет-магазине в Алматы, Казахстане`;
export const SITE_DESCRIPTION =
	'Goodies — интернет-магазин, где вы можете купить ⚡ стильные ювелирные украшения и аксессуары в Алматы.🌟 Мы предлагаем лучшие товары для ценителей качественных и элегантных украшений.❤️';
export const SITE_KEYWORDS = [
	'аксессуары',
	'ювелирные украшения',
	'кольца',
	'браслеты',
	'серьги',
	'Алматы',
	'магазин украшений',
	'интернет магазин',
];
export const BASE_KEYWORDS = [
	'аксессуары',
	'ювелирные украшения',
	'купить',
	'заказать',
	'Алматы',
	'украшения',
	'интернет магазин',
];
export const SITE_ICONS = {
	apple: [
		{
			url: '/icons/apple-icon-57x57.png',
			sizes: '57x57',
			rel: 'apple-touch-icon',
		},
		{
			url: '/icons/apple-icon-60x60.png',
			sizes: '60x60',
			rel: 'apple-touch-icon',
		},
		{
			url: '/icons/apple-icon-72x72.png',
			sizes: '72x72',
			rel: 'apple-touch-icon',
		},
		{
			url: '/icons/apple-icon-76x76.png',
			sizes: '76x76',
			rel: 'apple-touch-icon',
		},
		{
			url: '/icons/apple-icon-114x114.png',
			sizes: '114x114',
			rel: 'apple-touch-icon',
		},
		{
			url: '/icons/apple-icon-120x120.png',
			sizes: '120x120',
			rel: 'apple-touch-icon',
		},
		{
			url: '/icons/apple-icon-144x144.png',
			sizes: '144x144',
			rel: 'apple-touch-icon',
		},
		{
			url: '/icons/apple-icon-152x152.png',
			sizes: '152x152',
			rel: 'apple-touch-icon',
		},
		{
			url: '/icons/apple-icon-180x180.png',
			sizes: '180x180',
			rel: 'apple-touch-icon',
		},
	],
	icon: [
		{
			url: '/icons/favicon-16x16.png',
			rel: 'icon',
			sizes: '16x16',
			type: 'image/png',
		},
		{
			url: '/icons/favicon-32x32.png',
			rel: 'icon',
			sizes: '32x32',
			type: 'image/png',
		},
		{
			url: '/icons/favicon-48x48.png',
			rel: 'icon',
			sizes: '48x48',
			type: 'image/png',
		},
		{
			url: '/icons/favicon-96x96.png',
			rel: 'icon',
			sizes: '96x96',
			type: 'image/png',
		},
		{
			url: '/icons/android-icon-192x192.png',
			rel: 'icon',
			sizes: '192x192',
			type: 'image/png',
		},
	],
	shortcut: [
		{ url: '/icons/favicon-16x16.png', rel: 'shortcut icon', sizes: '16x16' },
	],
};
