'use client';
import { Counter } from '@/shared/kit/counter';
import { useCounterCart } from '../model';

type Props = {
	productId: string;
	stock: number;
	quantity: number;
	widthIcon?: number;
	disable: boolean;
};

export const CartItemCounter = ({
	productId,
	quantity,
	stock,
	widthIcon,
	disable,
}: Props) => {
	const { handleUpdate } = useCounterCart(productId, stock);
	return (
		<Counter
			quantity={quantity}
			min={1}
			max={stock}
			onDecrement={() => handleUpdate(quantity - 1)}
			onIncrement={() => handleUpdate(quantity + 1)}
			onChange={handleUpdate}
			widthIcon={widthIcon}
			disable={disable}
		/>
	);
};
