import { MinusIcon } from '@/shared/ui/icons/minus';
import { PlusIcon } from '@/shared/ui/icons/plus';
import { useEffect, useState } from 'react';
import styles from './styles.module.scss';

type CounterProps = {
	quantity: number;
	min?: number;
	max: number;
	widthIcon?: number;
	onDecrement: () => void;
	onIncrement: () => void;
	onChange: (value: number, id?: string) => void;
	disable?: boolean;
};

export const Counter = ({
	quantity,
	min = 1,
	max,
	onDecrement,
	onIncrement,
	onChange,
	widthIcon = 20,
	disable,
}: CounterProps) => {
	const [inputValue, setInputValue] = useState(quantity.toString());

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const value = e.target.value;

		// Позволяем временно оставить пустое поле
		if (value === '') {
			setInputValue('');
			return;
		}

		const numberValue = Number(value);
		if (!isNaN(numberValue) && numberValue >= min && numberValue <= max) {
			setInputValue(value);
		}
	};

	const handleBlur = () => {
		const numberValue = Number(inputValue);
		if (!isNaN(numberValue) && numberValue >= min && numberValue <= max) {
			onChange(numberValue);
		} else {
			// Если введено некорректное значение, откатываем к текущему количеству
			setInputValue(quantity.toString());
		}
	};

	// Синхронизация, если `quantity` обновляется извне
	useEffect(() => {
		setInputValue(quantity.toString());
	}, [quantity]);

	return (
		<div className={styles.wrapper}>
			<button
				onClick={onDecrement}
				disabled={quantity <= min || disable}
				className={styles.but}
				type='button'
				style={{ width: widthIcon, height: widthIcon }}
			>
				<MinusIcon />
			</button>
			<input
				type='number'
				min={min}
				max={max}
				value={inputValue}
				onChange={handleChange}
				onBlur={handleBlur}
				aria-label={`Количество: ${quantity}`}
				className={styles.inp}
				disabled={disable}
			/>
			<button
				onClick={onIncrement}
				disabled={quantity >= max || disable}
				className={styles.but}
				type='button'
				style={{ width: widthIcon, height: widthIcon }}
			>
				<PlusIcon />
			</button>
		</div>
	);
};
