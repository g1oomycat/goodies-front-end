'use client';

import { ButtonIcon } from '@/shared/ui/components/button-icon';
import { ShoppingBagIcon } from '@/shared/ui/icons/shopping-bag';
import { useBasket } from '../../model';
import styles from './styles.module.scss';
type Props = {
	productId: string;
};

export const AddProductToBasketBtnIcon = ({ productId }: Props) => {
	const { addProduct } = useBasket(productId);
	return (
		<ButtonIcon onClick={addProduct} className={styles.root} colorType='second'>
			<ShoppingBagIcon />
		</ButtonIcon>
	);
};
