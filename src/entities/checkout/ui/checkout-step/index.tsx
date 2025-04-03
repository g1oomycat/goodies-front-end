import classNames from 'classnames';
import styles from './styles.module.scss';

interface CheckoutStepProps {
	step: number;
	totalSteps: number;
	title: string;
	children: React.ReactNode;
}

export const CheckoutStep = ({
	step,
	totalSteps,
	title,
	children,
}: CheckoutStepProps) => {
	return (
		<div className={classNames(styles.wrapper, 'gap-50')}>
			<div className={'checkout--item fw-500'}>
				<div
					className={'left--item fs-l-1 '}
					style={{ top: '5%' }}
				>{`${step}/${totalSteps}`}</div>
				<div className={' fs-l-2  low'}>{title}</div>
			</div>
			<div className={classNames(styles.body, 'gap-50')}>{children}</div>
		</div>
	);
};
