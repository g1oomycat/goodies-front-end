'use client';

import { ButtonIcon } from '@/shared/ui/components/button-icon';
import { DeleteIcon } from '@/shared/ui/icons/delete';
import { delItemFromBasket } from '../../model';
type Props = {
	productId: string;
};

export const DelProductFromBasketBtnIcon = ({ productId }: Props) => {
	const { delProduct, isPending } = delItemFromBasket(productId);
	return (
		<ButtonIcon onClick={delProduct} disabled={isPending}>
			<DeleteIcon />
		</ButtonIcon>
	);
};
