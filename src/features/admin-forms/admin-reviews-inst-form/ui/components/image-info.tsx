import { imageConfig } from '@/entities/uploads';
import { AdminRightFormCreateEditItem } from '@/shared/components/admin-right-form-create-edit-item';
import { requiredValidation } from '@/shared/lib/input-validations';
import { DragDropInput } from '@/shared/ui/components/admin-drag-drop-input';
import { Control } from 'react-hook-form';

type Props = {
	control: Control<any>;
};

export const ImageInfo = ({ control }: Props) => {
	return (
		<AdminRightFormCreateEditItem title='фотография *'>
			<DragDropInput
				title={` Перетащите или выберите до ${imageConfig.inst.maxCount} фотографии (размер любой).`}
				control={control}
				name='image'
				maxFiles={imageConfig.inst.maxCount}
				rules={requiredValidation}
			/>
		</AdminRightFormCreateEditItem>
	);
};
