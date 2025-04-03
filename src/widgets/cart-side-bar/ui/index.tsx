'use client';
import { InfoCart } from '@/entities/cart/ui/info-cart';
import { GoToCheckoutBtn } from '@/features/validate-stock-on-cart';
import { useCartSideBarStore } from '@/shared/config/cart-side-bar-store';

import { SideBar } from '@/shared/kit/side-bar';

import { AnchorCart } from '@/entities/cart/ui/anchor-cart';
import { IOrderItemResponse } from '@/entities/orders';
import { Anchor } from '@/shared/components/anchor';
import { useCartStore } from '@/shared/config/cart-store';
import { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { CartHeader } from './components/cart-header';
import { CartProductList } from './components/cart-product-list';
import { DeletedProductList } from './components/deleted-product-list';
import { EmptyCartMessage } from './components/empty-cart-message';
import styles from './styles.module.scss';

export const CartSideBar = () => {
	const { closeSideBar, isOpen } = useCartSideBarStore();
	const cart = useCartStore(state => state.cart);

	const { ref, inView } = useInView({
		threshold: 0,
		triggerOnce: false, // Можно срабатывать несколько раз
	});

	const [availableItems, setAvailableItems] = useState<IOrderItemResponse[]>(
		[]
	);
	const [deletedItems, setDeletedItems] = useState<IOrderItemResponse[]>([]);
	const [disabled, setDisabled] = useState(false);

	useEffect(() => {
		if (!isOpen || !cart?.result?.orderItems) return;
		setAvailableItems(
			cart.result.orderItems.filter(item => !cart.deletesList.includes(item.id))
		);
		setDeletedItems(
			cart.result.orderItems.filter(item => cart.deletesList.includes(item.id))
		);
		setDisabled(
			!cart.result.orderItems.length ||
				!!cart.deletesList.length ||
				!!cart.updatesList.length
		);
	}, [isOpen, cart]);
	if (!cart) return null;

	return (
		<SideBar
			closeMenu={closeSideBar}
			isOpen={isOpen}
			side='right'
			menuSize='large'
			portalChildren={
				!!cart.result.orderItems.length ? (
					<Anchor isVisible={!inView}>
						<AnchorCart
							price={cart?.total ?? 0}
							sale={cart?.discount ?? 0}
							actionOrder={
								<GoToCheckoutBtn
									fullWidth={false}
									size='m'
									disabled={disabled}
									data={cart}
								/>
							}
						/>
					</Anchor>
				) : undefined
			}
		>
			<div className={styles.container}>
				<CartHeader
					closeSideBar={closeSideBar}
					totalQuantity={cart?.totalQuantity ?? 0}
				/>
				{!cart.result.orderItems.length ? (
					<EmptyCartMessage closeSideBar={closeSideBar} />
				) : (
					<>
						<CartProductList
							items={availableItems}
							updatesList={cart.updatesList}
						/>
						{!!cart.deletesList.length && (
							<DeletedProductList
								items={deletedItems}
								updatesList={cart.updatesList}
							/>
						)}
						<div ref={ref}>
							<InfoCart
								data={cart}
								actionOrder={
									<GoToCheckoutBtn
										fullWidth={true}
										size='l'
										disabled={disabled}
										data={cart}
									/>
								}
							/>
						</div>
					</>
				)}
			</div>
		</SideBar>
	);
};
