import { ButtonIcon } from '@/shared/ui/components/button-icon';
import { CloseIcon } from '@/shared/ui/icons/close';
import classNames from 'classnames';
import styles from '../styles.module.scss';

export const CartHeader = ({
	closeSideBar,
	totalQuantity,
}: {
	closeSideBar: () => void;
	totalQuantity: number;
}) => (
	<div className={classNames(styles.head, 'mb-30')}>
		<div>
			{!!totalQuantity && (
				<>
					<span className='fs-l-3 fw-500'>корзина</span>
					<span className='fs-m-1 fw-500'>{`/ ${totalQuantity} шт.`}</span>
				</>
			)}
		</div>
		<div>
			<ButtonIcon onClick={closeSideBar}>
				<CloseIcon />
			</ButtonIcon>
		</div>
	</div>
);
