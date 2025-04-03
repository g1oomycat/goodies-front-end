'use client';

import { BlurBlock } from '@/shared/kit/blur-block';
import { ButtonCustom } from '@/shared/ui/components/button';
import { delItemFromBasket } from '../../model';
type Props = {
	productId: string;
};

export const DelProductFromBasketBtnBlur = ({ productId }: Props) => {
	const { delProduct, isPending } = delItemFromBasket(productId);
	return (
		<BlurBlock>
			<ButtonCustom
				size='s'
				onClick={delProduct}
				fullWidth={false}
				colorType='primary'
				disabled={isPending}
			>
				Удалить товар
			</ButtonCustom>
		</BlurBlock>
	);
};
