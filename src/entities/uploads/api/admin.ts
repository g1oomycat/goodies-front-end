import { axiosWithAuth } from '@/shared/api/interceptors';
import { IEntityType, IUploadsResponse } from '../types/api';

class AdminUploadsService {
	private BASE_URL = 'admin/uploads';

	async uploadImages(entityType: IEntityType, images: File[]) {
		const formData = new FormData();

		images.forEach(file => {
			formData.append('files', file);
		});

		const response = await axiosWithAuth.post<IUploadsResponse>(
			`${this.BASE_URL}/${entityType}`,
			formData,
			{
				headers: {
					'Content-Type': 'multipart/form-data',
				},
			}
		);

		return response.data;
	}
}

export const adminUploadsService = new AdminUploadsService();
