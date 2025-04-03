'use client';

import {
	createReviewInstAdmin,
	IReviewsInstForm,
	IReviewsInstResponse,
	updateReviewInstAdmin,
} from '@/entities/reviews-inst';
import { useUploadImagesAdmin } from '@/entities/uploads/model/upload-images';
import { SubmitHandler, useForm } from 'react-hook-form';

type Props = {
	data?: IReviewsInstResponse;
};

export const useCreateOrEditReviewInstAdmin = ({ data }: Props) => {
	// Инициализируем форму с начальными значениями (если редактирование — берём из `data`)

	const { handleSubmit, control, reset } = useForm<IReviewsInstForm>({
		mode: 'onChange',
		defaultValues: {
			name: data?.name ?? '',
			nick: data?.nick ?? '',
			image: data ? [{ id: data.image }] : [],
			isActive: data?.isActive ?? true,
			position: data?.position.toString() ?? '',
		},
	});

	// API-хуки для создания и обновления продукта
	const {
		mutateAsync: mutateAsyncReviewsInst,
		isPending: isPendingReviewsInst,
	} = createReviewInstAdmin();
	const {
		mutateAsync: mutateAsyncUpdateReviewsInst,
		isPending: isPendingUpdateReviewsInst,
	} = updateReviewInstAdmin(data?.id ?? '');

	// API-хук для загрузки изображений
	const { mutateAsync: mutateAsyncImage, isPending: isPendingImage } =
		useUploadImagesAdmin('inst', 'отзыв инсты');

	// Функция обработки формы
	const onSubmit: SubmitHandler<IReviewsInstForm> = async submitData => {
		let image: string = '';
		try {
			if (submitData.image[0].file) {
				const resImage = await mutateAsyncImage([submitData.image[0].file]);
				image = resImage[0].url;
			} else {
				image = submitData.image[0].id;
			}
		} catch (error) {
			return;
		}

		// Определяем, создаем товар или обновляем
		try {
			const mutateReviewsInst = data
				? mutateAsyncUpdateReviewsInst
				: mutateAsyncReviewsInst;
			await mutateReviewsInst({
				...submitData,
				position:
					submitData.position === '' ? undefined : Number(submitData.position),
				image,
			});
		} catch (error) {
			return; // Ошибка при создании/обновлении — прерываем выполнение
		}

		// Если это создание товара, сбрасываем форму
		if (!data) {
			reset({
				name: '',
				nick: '',
				image: [],
				isActive: true,
				position: undefined,
			});
		}
	};

	return {
		handleSubmit,
		control,
		onSubmit,
		isPending:
			isPendingImage || isPendingReviewsInst || isPendingUpdateReviewsInst,
	};
};
