import { IOrderItemResponse } from '@/entities/orders';
import { HorizontalProductCard } from '@/entities/product';
import { DelProductFromBasketBtnBlur } from '@/features/del-product-from-cart';
import styles from '../styles.module.scss';

interface DeletedProductListProps {
	items: IOrderItemResponse[];
	updatesList: string[];
}

export const DeletedProductList = ({
	items,
	updatesList,
}: DeletedProductListProps) => (
	<>
		<div className={'fs-l-1 fw-500 mb-25'} style={{ textAlign: 'start' }}>
			<span>упс... эти товары уже раскупили</span>
		</div>

		<div className={styles.products}>
			{items.map(item => (
				<div className={styles.card} key={item.id}>
					<HorizontalProductCard
						data={item}
						actionBlur={
							updatesList.includes(item.id) && (
								<DelProductFromBasketBtnBlur productId={item.productId} />
							)
						}
					/>
				</div>
			))}
		</div>
	</>
);
