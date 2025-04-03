import { imageConfig } from '@/entities/uploads';
import { AdminRightFormCreateEditItem } from '@/shared/components/admin-right-form-create-edit-item';
import { requiredValidation } from '@/shared/lib/input-validations';
import { DragDropInput } from '@/shared/ui/components/admin-drag-drop-input';
import { Control } from 'react-hook-form';

type Props = {
	control: Control<any>;
};

export const Images = ({ control }: Props) => {
	return (
		<AdminRightFormCreateEditItem title='фотографии *'>
			<DragDropInput
				title={` Перетащите или выберите до ${imageConfig.bannersLG.maxCount} фотографий (размер ${imageConfig.bannersLG.width}×${imageConfig.bannersLG.height}).`}
				control={control}
				name='imageLG'
				maxFiles={imageConfig.bannersLG.maxCount}
				rules={requiredValidation}
			/>
			<DragDropInput
				title={` Перетащите или выберите до ${imageConfig.bannersMD.maxCount} фотографий (размер ${imageConfig.bannersMD.width}×${imageConfig.bannersMD.height}).`}
				control={control}
				name='imageMD'
				maxFiles={imageConfig.bannersMD.maxCount}
				rules={requiredValidation}
			/>
			<DragDropInput
				title={` Перетащите или выберите до ${imageConfig.bannersSM.maxCount} фотографий (размер ${imageConfig.bannersSM.width}×${imageConfig.bannersSM.height}).`}
				control={control}
				name='imageSM'
				maxFiles={imageConfig.bannersSM.maxCount}
				rules={requiredValidation}
			/>
		</AdminRightFormCreateEditItem>
	);
};
