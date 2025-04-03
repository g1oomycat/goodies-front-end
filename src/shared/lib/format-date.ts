import { format } from 'date-fns';
import { ru } from 'date-fns/locale';

export const formatDateShort = (date: string): string => {
	return format(new Date(date), 'd MMM', { locale: ru }).replace('.', '');
};
export const formatDateLong = (date: string): string => {
	return format(new Date(date), 'dd.MM.yyyy', {
		locale: ru,
	});
};
export const formatDateTimeLong = (date?: string): string => {
	if (date === undefined || date === null) {
		return '';
	}
	return format(new Date(date), 'dd.MM.yyyy HH:mm', { locale: ru });
};
