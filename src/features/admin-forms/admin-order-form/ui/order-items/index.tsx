'use client';
import { IOrderForm, OrderItemCard } from '@/entities/orders';
import { useSearchDebounce } from '@/features/search-debounce';
import { AdminFormCreateEditBlock } from '@/shared/components/admin-form-create-edit-block';
import { AdminFormCreateEditItem } from '@/shared/components/admin-form-create-edit-item';
import { Counter } from '@/shared/kit/counter';

import { ButtonIcon } from '@/shared/ui/components/button-icon';
import { CloseIcon } from '@/shared/ui/icons/close';

import { ButtonCustom } from '@/shared/ui/components/button';
import { DeleteIcon } from '@/shared/ui/icons/delete';
import { SearchIcon } from '@/shared/ui/icons/search';
import { sxMuiInput } from '@/shared/ui/styles';
import {
	FormControl,
	IconButton,
	InputAdornment,
	OutlinedInput,
} from '@mui/material';
import { Control, UseFormSetValue } from 'react-hook-form';
import { useOrderItems } from '../../model/order-items';
import styles from './styles.module.scss';

type Props = {
	setValue: UseFormSetValue<IOrderForm>;
	control: Control<any>;
};

export const OrderItems = ({ setValue, control }: Props) => {
	const { orderItems, changeQuantity, deleteOrderItem, addOrderItem } =
		useOrderItems(setValue, control);
	const {
		productsData: products,
		setValue: setValueSearch,
		value,
	} = useSearchDebounce({
		onlyProducts: true,
	});
	return (
		<AdminFormCreateEditBlock title='Товары *'>
			<AdminFormCreateEditItem title='товары'>
				<div
					className={styles.container}
					style={{ marginBottom: orderItems.length > 0 ? '3rem' : 0 }}
				>
					{orderItems.length > 0 ? (
						orderItems.map(item => (
							<div className={styles.wrapper} key={item.productId}>
								<OrderItemCard
									orderItemData={item}
									key={item.productId}
									counterAction={
										<Counter
											quantity={item.quantity}
											max={item.product.stock}
											onDecrement={() =>
												changeQuantity(item.quantity - 1, item.productId)
											}
											onIncrement={() =>
												changeQuantity(item.quantity + 1, item.productId)
											}
											onChange={value => changeQuantity(value, item.productId)}
										/>
									}
									deleteAction={
										<ButtonIcon onClick={() => deleteOrderItem(item.productId)}>
											<DeleteIcon />
										</ButtonIcon>
									}
								/>
							</div>
						))
					) : (
						<span>список товар пуст</span>
					)}
				</div>
			</AdminFormCreateEditItem>

			<AdminFormCreateEditItem title='поиск'>
				<FormControl fullWidth sx={sxMuiInput}>
					<OutlinedInput
						fullWidth
						size='small'
						value={value}
						placeholder='Добавить новые товары'
						onChange={e => setValueSearch(e.target.value)}
						endAdornment={
							<InputAdornment position='end'>
								{value && (
									<IconButton
										aria-label='Очистить'
										onClick={() => setValueSearch('')}
									>
										<CloseIcon />
									</IconButton>
								)}

								<SearchIcon />
							</InputAdornment>
						}
					/>
				</FormControl>
			</AdminFormCreateEditItem>
			<AdminFormCreateEditItem title='результат поиска'>
				<div className={styles.container}>
					{products === undefined ? (
						<span>Введите название товара, чтобы добавить в заказ</span>
					) : products?.length === 0 ? (
						<span>Ничего не найдено...</span>
					) : (
						products?.map(item => (
							<div className={styles.wrapper} key={item.id}>
								<OrderItemCard
									productData={item}
									addAction={
										<ButtonCustom
											mode='admin'
											colorType='second'
											size='s'
											type='button'
											onClick={() => addOrderItem(item)}
										>
											Добавить товар
										</ButtonCustom>
									}
								/>
							</div>
						))
					)}
				</div>
			</AdminFormCreateEditItem>
		</AdminFormCreateEditBlock>
	);
};
