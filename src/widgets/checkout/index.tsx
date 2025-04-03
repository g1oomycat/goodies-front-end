import { ICartResponse } from '@/entities/cart';

import { IUsersResponse } from '@/entities/user';
import { CheckoutForm } from '@/features/checkout-form';

import { CheckoutInfo } from '@/entities/checkout';
import { ButtonCustom } from '@/shared/ui/components/button';
import classNames from 'classnames';
import styles from './styles.module.scss';
type Props = {
	cart: ICartResponse;
	user: IUsersResponse;
};

export const CheckoutSection = ({ cart, user }: Props) => {
	return (
		<section className={classNames(styles.root, '_cont_limit_medium mt-40')}>
			<div className={styles.body}>
				<div className={classNames(styles.form_column, 'mb-100')}>
					<CheckoutForm cart={cart} user={user} />
				</div>

				<CheckoutInfo
					data={cart}
					actionOrder={
						<ButtonCustom type='submit' form='checkout' size='m' fullWidth>
							оформить заказ
						</ButtonCustom>
					}
				/>
			</div>
		</section>
	);
};
