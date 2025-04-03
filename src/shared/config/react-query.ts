import { QueryClient } from '@tanstack/react-query';

export const queryClient = new QueryClient({
	defaultOptions: {
		queries: {
			refetchOnWindowFocus: false,
			refetchOnReconnect: true,
			staleTime: 60 * 1000, // 1 минута (если не критично получать свежие данные сразу)
			gcTime: 10 * 60 * 1000, // 10 минут, после которых кэш удаляется
			placeholderData: (prev: any) => prev,
		},
	},
});
