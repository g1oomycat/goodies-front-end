import { handleAxiosError } from '@/shared/lib/handle-axios-error';
import { useMutation } from '@tanstack/react-query';
import { adminUploadsService } from '../api';
import { IEntityType } from '../types';

export function useUploadImagesAdmin(entityType: IEntityType, entity: string) {
	// Добавление в избранное
	return useMutation({
		mutationKey: ['upload-images', entityType],
		mutationFn: (data: File[]) =>
			adminUploadsService.uploadImages(entityType, data),

		onError: error => {
			handleAxiosError(error, `Фотографии ${entity}`);
		},
	});
}
