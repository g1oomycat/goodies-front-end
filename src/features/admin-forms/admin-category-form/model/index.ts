'use client';

import {
	createCategoryAdmin,
	EnumAttribute,
	ICategoriesForm,
	ICategoriesResponse,
	updateCategoryAdmin,
} from '@/entities/category';
import { useUploadImagesAdmin } from '@/entities/uploads/model/upload-images';
import { SubmitHandler, useForm } from 'react-hook-form';

type Props = {
	data?: ICategoriesResponse;
};

export const useCreateOrEditCategoryAdmin = ({ data }: Props) => {
	// Инициализируем форму с начальными значениями (если редактирование — берём из `data`)

	const { handleSubmit, control, reset, setValue } = useForm<ICategoriesForm>({
		mode: 'onChange',
		defaultValues: {
			name: data?.name ?? '',
			description: data?.description ?? '',
			image: data ? [{ id: data.image }] : [],
			attributes: data?.attributes ?? [
				{
					name: '',
					filterable: true,
					options: [],
					type: EnumAttribute.STRING,
				},
			],
			numberSort: data?.numberSort?.toString() ?? undefined,
		},
	});

	// API-хуки для создания и обновления продукта
	const { mutateAsync: mutateAsyncCategories, isPending: isPendingCategories } =
		createCategoryAdmin();
	const {
		mutateAsync: mutateAsyncUpdateCategories,
		isPending: isPendingUpdateCategories,
	} = updateCategoryAdmin(data?.id ?? '');

	// API-хук для загрузки изображений
	const { mutateAsync: mutateAsyncImage, isPending: isPendingImage } =
		useUploadImagesAdmin('categories', 'категории');

	// Функция обработки формы
	const onSubmit: SubmitHandler<ICategoriesForm> = async submitData => {
		let image: string = '';
		try {
			if (submitData.image[0].file) {
				const resImage = await mutateAsyncImage([submitData.image[0].file]);
				image = resImage[0].url;
			} else {
				image = submitData.image[0].id;
			}
		} catch (error) {
			console.error(error);

			return;
		}

		// Определяем, создаем товар или обновляем
		try {
			const mutateCategories = data
				? mutateAsyncUpdateCategories
				: mutateAsyncCategories;
			await mutateCategories({
				...submitData,
				numberSort:
					submitData.numberSort === ''
						? undefined
						: Number(submitData.numberSort),
				image,
			});
		} catch (error) {
			return; // Ошибка при создании/обновлении — прерываем выполнение
		}

		// Если это создание товара, сбрасываем форму
		if (!data) {
			reset({
				name: '',
				description: '',
				image: [],
				numberSort: undefined,
				attributes: [
					{
						name: '',
						filterable: false,
						options: [],
						type: EnumAttribute.STRING,
					},
				],
			});
		}
	};

	return {
		handleSubmit,
		control,
		onSubmit,
		setValue,
		isPending:
			isPendingImage || isPendingCategories || isPendingUpdateCategories,
	};
};
