import classNames from 'classnames';
import styles from './styles.module.scss';

interface CheckoutItemProps {
	title?: string;
	children: React.ReactNode;
	isChildrenInput?: boolean;
}

export const CheckoutItem = ({
	title,
	children,
	isChildrenInput = true,
}: CheckoutItemProps) => {
	return (
		<div className={classNames(styles.item, 'checkout--item')}>
			<div
				className={classNames(
					styles.title,
					'left--item fw-500 fs-s-3 low web-lg'
				)}
				style={{ top: isChildrenInput ? '2px' : '' }}
			>
				{title}
			</div>

			<div className={classNames(styles.container, 'fs-s-2 gap-25')}>
				{!!title && (
					<div
						className={classNames(styles.title, ' fw-500 fs-m-2 low mob-lg')}
						style={{ top: isChildrenInput ? '2px' : '' }}
					>
						{title}
					</div>
				)}
				{children}
			</div>
		</div>
	);
};
