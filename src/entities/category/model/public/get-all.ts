'use client';
import { categoriesService, ICategoryParams } from '@/entities/category';
import { useQuery } from '@tanstack/react-query';

export const getAllCategories = (params: ICategoryParams) => {
	return useQuery({
		queryKey: ['get-all-categories', params],
		queryFn: () => categoriesService.getCategories(params),

		staleTime: 30 * 1000, // 30 секунд
		gcTime: 5 * 60 * 1000, // 5 минут
	});
};
