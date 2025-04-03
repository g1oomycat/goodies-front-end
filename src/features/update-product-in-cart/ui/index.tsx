'use client';

import { ICartItemsUpdate } from '@/entities/cart';
import { BlurBlock } from '@/shared/kit/blur-block';
import { ButtonCustom } from '@/shared/ui/components/button';
import { updateItemFromBasket } from '../model';

type Props = {
	data: ICartItemsUpdate;
};

export const UpdateProductFromBasketBtnBlur = ({ data }: Props) => {
	const { updateProduct } = updateItemFromBasket(data);
	return (
		<BlurBlock>
			<ButtonCustom size='s' onClick={updateProduct} fullWidth={false}>
				обновить остаток
			</ButtonCustom>
		</BlurBlock>
	);
};
