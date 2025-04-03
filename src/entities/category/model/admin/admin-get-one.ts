import { adminCategoriesService } from '@/entities/category';
import { useQuery } from '@tanstack/react-query';

export const getOneCategoryAdmin = (id: string) => {
	return useQuery({
		queryKey: ['get-one-category-by-id', { id }],
		queryFn: () => adminCategoriesService.getCategory(id),
	});
};
