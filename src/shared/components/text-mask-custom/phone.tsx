'use client';

import React, { useState } from 'react';
import { IMaskInput } from 'react-imask';

interface CustomProps {
	onChange: (event: { target: { name: string; value: string } }) => void;
	name: string;
}

export const TextMaskCustomPhone = React.forwardRef<
	HTMLInputElement,
	CustomProps
>(function TextMaskCustom(props, ref) {
	const { onChange, ...other } = props;
	// Состояние для контроля свойства lazy
	const [isLazy, setIsLazy] = useState(true);

	const handleAccept = (value: any) => {
		// Обновляем состояние lazy в зависимости от наличия символов
		setIsLazy(value.trim().length === 0);
		// Вызываем переданный onChange
		onChange({ target: { name: props.name, value } });
	};

	return (
		<IMaskInput
			{...other}
			mask={'+7 (700) 000-00-00'}
			lazy={isLazy} // Меняем значение lazy
			autofix={true}
			inputRef={ref}
			onAccept={handleAccept}
			overwrite
		/>
	);
});
