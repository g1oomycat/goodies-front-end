'use client';

import { createBannerAdmin } from '@/entities/banner/model/admin/admin-create';
import { updateBannerAdmin } from '@/entities/banner/model/admin/admin-update';

import { IBannerForm, IBannerResponse } from '@/entities/banner';
import { IUploadsResponse } from '@/entities/uploads';
import { useUploadImagesAdmin } from '@/entities/uploads/model/upload-images';
import { formatDateLong } from '@/shared/lib/format-date';
import { addDays } from 'date-fns';
import { SubmitHandler, useForm } from 'react-hook-form';

type Props = {
	data?: IBannerResponse;
};

export const useCreateOrEditBannerAdmin = ({ data }: Props) => {
	// Инициализируем форму с начальными значениями (если редактирование — берём из `data`)
	const dateNow = formatDateLong(new Date().toString());
	const dateTomorrow = formatDateLong(addDays(new Date(), 7).toString());
	const { handleSubmit, control, reset } = useForm<IBannerForm>({
		mode: 'onChange',
		defaultValues: {
			description: data?.description ?? '',
			title: data?.title ?? '',
			buttonBG: data?.buttonBG ?? '#000000',
			buttonTextColor: data?.buttonTextColor ?? '#ffffff',
			textColor: data?.textColor ?? '#000000',

			imageLG: data ? [{ id: data.imageLG }] : [],
			imageMD: data ? [{ id: data.imageMD }] : [],
			imageSM: data ? [{ id: data.imageSM }] : [],
			isActive: data?.isActive ?? true,
			link: data?.link ?? '',
			position: data?.position.toString() ?? '',

			endDate: data?.endDate ? formatDateLong(data.endDate) : dateTomorrow,
			startDate: data?.startDate ? formatDateLong(data.startDate) : dateNow,
		},
	});

	// API-хуки для создания и обновления продукта
	const { mutateAsync: mutateAsyncBanner, isPending: isPendingBanner } =
		createBannerAdmin();
	const {
		mutateAsync: mutateAsyncUpdateBanner,
		isPending: isPendingUpdateBanner,
	} = updateBannerAdmin(data?.id ?? '');

	// API-хук для загрузки изображений
	const { mutateAsync: mutateAsyncImagesLG, isPending: isPendingImagesLG } =
		useUploadImagesAdmin('bannersLG', 'большого баннера');
	const { mutateAsync: mutateAsyncImagesMD, isPending: isPendingImagesMD } =
		useUploadImagesAdmin('bannersMD', 'среднего баннера');
	const { mutateAsync: mutateAsyncImagesSM, isPending: isPendingImagesSM } =
		useUploadImagesAdmin('bannersSM', 'маленького баннера');

	// Функция обработки формы
	const onSubmit: SubmitHandler<IBannerForm> = async submitData => {
		let imageLGUrl: string = '';
		let imageMDUrl: string = '';
		let imageSMUrl: string = '';
		const filesList: Promise<IUploadsResponse>[] = [];

		try {
			const [imageLG] = submitData.imageLG;
			const [imageMD] = submitData.imageMD;
			const [imageSM] = submitData.imageSM;

			if (imageLG.file) {
				filesList.push(mutateAsyncImagesLG([imageLG.file]));
			} else {
				imageLGUrl = imageLG.id;
			}

			if (imageMD.file) {
				filesList.push(mutateAsyncImagesMD([imageMD.file]));
			} else {
				imageMDUrl = imageMD.id;
			}

			if (imageSM.file) {
				filesList.push(mutateAsyncImagesSM([imageSM.file]));
			} else {
				imageSMUrl = imageSM.id;
			}

			if (filesList.length > 0) {
				const uploadResults = await Promise.all(filesList);

				let index = 0;
				if (imageLG.file) imageLGUrl = uploadResults[index++][0].url;
				if (imageMD.file) imageMDUrl = uploadResults[index++][0].url;
				if (imageSM.file) imageSMUrl = uploadResults[index++][0].url;
			}
		} catch (error) {
			return;
		}

		// Определяем, создаем товар или обновляем
		try {
			const mutateBanner = data ? mutateAsyncUpdateBanner : mutateAsyncBanner;
			await mutateBanner({
				...submitData,
				imageLG: imageLGUrl,
				imageMD: imageMDUrl,
				imageSM: imageSMUrl,
				position:
					submitData.position === '' ? undefined : Number(submitData.position),
			});
		} catch (error) {
			return; // Ошибка при создании/обновлении — прерываем выполнение
		}

		// Если это создание товара, сбрасываем форму
		if (!data) {
			reset({
				description: '',
				title: '',
				buttonBG: '#000000',
				buttonTextColor: '#ffffff',
				textColor: '#000000',
				endDate: dateTomorrow,
				imageLG: [],
				imageMD: [],
				imageSM: [],
				isActive: true,
				link: '',
				position: undefined,
				startDate: dateNow,
			});
		}
	};

	return {
		handleSubmit,
		control,
		onSubmit,
		isPending:
			isPendingImagesLG ||
			isPendingImagesMD ||
			isPendingImagesSM ||
			isPendingBanner ||
			isPendingUpdateBanner,
	};
};
