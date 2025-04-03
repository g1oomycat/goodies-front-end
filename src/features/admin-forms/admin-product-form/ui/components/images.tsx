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
				title={` Перетащите или выберите до ${imageConfig.products.maxCount} фотографий (размер ${imageConfig.products.width}×${imageConfig.products.height}).`}
				control={control}
				name='images'
				maxFiles={imageConfig.products.maxCount}
				rules={requiredValidation}
			/>
		</AdminRightFormCreateEditItem>
	);
};
