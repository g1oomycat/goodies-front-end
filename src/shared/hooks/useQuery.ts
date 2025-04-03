import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { ICreateQueryString } from '../types/create-query-string';

export const useQuery = () => {
	const router = useRouter();
	const pathname = usePathname();
	const searchParams = useSearchParams();
	const resetQuery = () => {
		router.replace(pathname);
	};
	const createQuery = ({ paramsToUpdate, refetch }: ICreateQueryString) => {
		const paramsCopy = new URLSearchParams(searchParams.toString());
		const params = new URLSearchParams(searchParams.toString());

		Object.entries(paramsToUpdate).forEach(([key, value]) => {
			if (value !== undefined && value !== null && value !== '') {
				params.set(key, String(value)); // Преобразуем значение в строку
			} else {
				params.delete(key);
			}
		});
		// Проверяем, есть ли параметры после удаления
		const newQueryString = params.toString();

		if (newQueryString !== paramsCopy.toString()) {
			router.push(`${pathname}?${newQueryString}`, { scroll: false });
			refetch?.();
		}
	};
	return { resetQuery, createQuery };
};
