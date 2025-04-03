import { IOrderItemResponse } from '@/entities/orders';
import { HorizontalProductCard } from '@/entities/product';
import { AddProductToWishlistIcon } from '@/features/add-product-to-wishlist';
import { CartItemCounter } from '@/features/cart-item-counter';
import { DelProductFromBasketBtnIcon } from '@/features/del-product-from-cart';
import { UpdateProductFromBasketBtnBlur } from '@/features/update-product-in-cart/ui';
import styles from '../styles.module.scss';

interface CartProductListProps {
	items: IOrderItemResponse[];
	updatesList: string[];
}

export const CartProductList = ({
	items,
	updatesList,
}: CartProductListProps) => (
	<div className={styles.products}>
		{items.map(item => (
			<div className={styles.card} key={item.id}>
				<HorizontalProductCard
					data={item}
					actionCounter={
						<CartItemCounter
							productId={item.productId}
							quantity={item.quantity}
							stock={item.product?.stock ?? 0}
							widthIcon={22}
							disable={updatesList.includes(item.id)}
						/>
					}
					actionFavorite={
						<AddProductToWishlistIcon productId={item.product.id} />
					}
					actionDeleteCart={
						<DelProductFromBasketBtnIcon productId={item.productId} />
					}
					actionBlur={
						updatesList.includes(item.id) && (
							<UpdateProductFromBasketBtnBlur
								data={{
									productId: item.productId,
									quantity: item.product.stock,
								}}
							/>
						)
					}
				/>
			</div>
		))}
	</div>
);
