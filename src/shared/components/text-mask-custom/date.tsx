'use client';

import React, { useState } from 'react';
import { IMask, IMaskInput } from 'react-imask';

interface CustomProps {
	onChange: (event: { target: { name: string; value: string } }) => void;
	name: string;
}

export const TextMaskCustomDate = React.forwardRef<
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
			mask={Date}
			blocks={{
				d: {
					mask: IMask.MaskedRange,
					placeholderChar: 'д',
					from: 1,
					to: 31,
					maxLength: 2,
				},
				m: {
					mask: IMask.MaskedRange,
					placeholderChar: 'м',
					from: 1,
					to: 12,
					maxLength: 2,
				},
				Y: {
					mask: IMask.MaskedRange,
					placeholderChar: 'г',
					from: 1900,
					to: 2999,
					maxLength: 4,
				},
			}}
			lazy={isLazy} // Меняем значение lazy
			autofix={'pad'}
			inputRef={ref}
			onAccept={handleAccept}
			overwrite
		/>
	);
});
