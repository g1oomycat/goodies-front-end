'use client';
import { ButtonCustom } from '@/shared/ui/components/button';
import { useBasket } from '../../model';

type Props = {
	productId: string;
	size?: 's' | 'm' | 'l';
};

export const AddProductToBasketBtnText = ({ productId, size }: Props) => {
	const { addProduct, isAdded } = useBasket(productId);
	return (
		<ButtonCustom
			onClick={addProduct}
			type='button'
			size={size}
			fullWidth={true}
		>
			{isAdded ? (
				<span>Товар уже в корзине</span>
			) : (
				<span>Добавить в корзину</span>
			)}
		</ButtonCustom>
	);
};
