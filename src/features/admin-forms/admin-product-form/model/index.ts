'use client';

import { ICategoriesResponse } from '@/entities/category';
import { getAllCategories } from '@/entities/category/model/public/get-all';
import {
	IProductAttributesCreate,
	IProductForm,
	IProductsResponse,
	transformAttributes,
} from '@/entities/product';
import { createProductAdmin } from '@/entities/product/model/admin/admin-create';
import { updateProductAdmin } from '@/entities/product/model/admin/admin-update';

import { useUploadImagesAdmin } from '@/entities/uploads/model/upload-images';
import { IOptionSelectMui } from '@/shared/types/options-select-mui';
import { useEffect } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';

type Props = {
	data?: IProductsResponse;
};

export const useCreateOrEditProductAdmin = ({ data }: Props) => {
	// Используем роутер для навигации

	// Инициализируем форму с начальными значениями (если редактирование — берём из `data`)
	const { handleSubmit, control, reset, watch } = useForm<IProductForm>({
		mode: 'onChange',
		defaultValues: {
			description: data?.description ?? '',
			name: data?.name ?? '',
			attributes: transformAttributes(data?.attributes) ?? {},
			images: data?.images.map(image => ({ id: image })) ?? [],
			categoryId: data?.categoryId ?? '',
			price: data?.price.toString() ?? '',
			stock: data?.stock.toString() ?? '',
		},
	});

	// Следим за изменениями в поле `categoryId`
	const watchCategoryId = watch('categoryId');

	// Получаем список всех категорий
	const { data: categoriesData } = getAllCategories({ limit: 0 });

	// Формируем массив для селекта категорий
	const categoryOptions: IOptionSelectMui =
		categoriesData?.result.map(category => ({
			id: category.id,
			label: category.name,
		})) || [];

	// Определяем выбранную категорию
	const selectedCategory: ICategoriesResponse | undefined =
		categoriesData?.result?.find(category => category.id === watchCategoryId);

	// Если меняем категорию, то сбрасываем атрибуты
	useEffect(() => {
		reset(prev => ({
			...prev,
			attributes:
				selectedCategory?.id === data?.categoryId
					? transformAttributes(data?.attributes)
					: {},
		}));
	}, [selectedCategory, reset]);

	// API-хуки для создания и обновления продукта
	const { mutateAsync: mutateAsyncProduct, isPending: isPendingProduct } =
		createProductAdmin();
	const {
		mutateAsync: mutateAsyncUpdateProduct,
		isPending: isPendingUpdateProduct,
	} = updateProductAdmin(data?.id ?? '');

	// API-хук для загрузки изображений
	const { mutateAsync: mutateAsyncImages, isPending: isPendingImages } =
		useUploadImagesAdmin('products', 'товаров');

	// Функция обработки формы
	const onSubmit: SubmitHandler<IProductForm> = async submitData => {
		// Преобразуем атрибуты в нужный формат

		const attributes: IProductAttributesCreate[] = Object.entries(
			submitData.attributes
		).map(([key, { value }]) => {
			const [categoryAttributeId, title] = key.split(';');
			return { categoryAttributeId, title, value };
		});

		// Формируем списки: id (с заглушками) и файлы
		const idsList = submitData.images.map(image =>
			image.file ? 'placeholder' : image.id
		);
		const filesList = submitData.images
			.map(image => image.file)
			.filter((file): file is File => Boolean(file));

		// Если есть файлы, загружаем их и заменяем заглушки
		let updatedIdsList = idsList;

		if (filesList.length) {
			try {
				const uploadResults = await mutateAsyncImages(filesList);
				let urlIndex = 0;
				updatedIdsList = idsList.map(id =>
					id === 'placeholder' ? uploadResults[urlIndex++].url : id
				);
			} catch (error) {
				return; // Ошибка загрузки изображений — прерываем выполнение
			}
		}

		// Определяем, создаем товар или обновляем
		try {
			const mutateProduct = data
				? mutateAsyncUpdateProduct
				: mutateAsyncProduct;
			await mutateProduct({
				...submitData,
				attributes,
				images: updatedIdsList,
				price: Number(submitData.price),
				stock: Number(submitData.stock),
			});
		} catch (error) {
			return; // Ошибка при создании/обновлении — прерываем выполнение
		}

		// Если это создание товара, сбрасываем форму
		if (!data) {
			reset({
				description: '',
				name: '',
				attributes: {},
				images: [],
				categoryId: '',
				price: undefined,
				stock: undefined,
			});
		}
	};

	return {
		handleSubmit,
		control,
		onSubmit,
		isPending: isPendingImages || isPendingProduct || isPendingUpdateProduct,
		categoryOptions,
		selectedCategory,
	};
};
