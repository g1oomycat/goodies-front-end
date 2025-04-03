import { imageConfig } from '@/entities/uploads';
import { AdminRightFormCreateEditItem } from '@/shared/components/admin-right-form-create-edit-item';
import { requiredValidation } from '@/shared/lib/input-validations';
import { DragDropInput } from '@/shared/ui/components/admin-drag-drop-input';
import { Control } from 'react-hook-form';

type Props = {
	control: Control<any>;
};

export const Image = ({ control }: Props) => {
	return (
		<AdminRightFormCreateEditItem title='фотографии *'>
			<DragDropInput
				title={` Перетащите или выберите до ${imageConfig.categories.maxCount} фотографий (размер ${imageConfig.categories.width}×${imageConfig.categories.height}).`}
				control={control}
				name='imageLG'
				maxFiles={imageConfig.categories.maxCount}
				rules={requiredValidation}
			/>
		</AdminRightFormCreateEditItem>
	);
};
