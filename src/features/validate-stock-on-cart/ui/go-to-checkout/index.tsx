import { ICartResponse } from '@/entities/cart';
import { ButtonCustom } from '@/shared/ui/components/button';
import { validateStockOnCart } from '../../model';

type Props = {
	data: ICartResponse;
	fullWidth?: boolean;
	size?: 's' | 'm' | 'l';
	disabled: boolean;
};

export const GoToCheckoutBtn = ({ fullWidth, size, disabled, data }: Props) => {
	const { goToCheckout } = validateStockOnCart(data);

	return (
		<ButtonCustom
			size={size}
			fullWidth={fullWidth}
			type='button'
			onClick={goToCheckout}
			disabled={disabled}
		>
			оформить заказ
		</ButtonCustom>
	);
};
