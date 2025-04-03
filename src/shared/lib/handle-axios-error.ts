// shared/lib/api/handleAxiosError.ts
import { showToastError } from '@/features/show-custom-toaster';
import { AxiosError } from 'axios';
import { toast } from 'sonner';
const TITLE = 'Ошибка при ';
export function handleAxiosError(
	error: unknown,
	entity: string = 'Данных',
	isAdmin: boolean = true
) {
	let message = 'Неизвестная ошибка, попробуйте перезагрузить страницу.';
	if (error instanceof AxiosError) {
		console.error(TITLE + entity, error);

		if (error.response) {
			message =
				error.response.data.message || `Код ошибки: ${error.response.status}`;
		} else if (error.request) {
			message = 'Сеть недоступна или сервер не отвечает.';
		} else {
			message = error.message;
		}
	}
	if (isAdmin) {
		// Для админки — стандартный toast.error
		toast.error(TITLE + entity, { description: message });
	} else {
		// Для клиента — кастомный тост
		showToastError({ entity: TITLE + entity, message });
	}
}
