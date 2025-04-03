'use client';

import React, { useState } from 'react';
import { IMask, IMaskInput } from 'react-imask';

interface CustomProps {
	onChange: (event: { target: { name: string; value: string } }) => void;
	name: string;
}

export const TextMaskCustomDateTime = React.forwardRef<
	HTMLInputElement,
	CustomProps
>(function TextMaskCustom(props, ref) {
	const { onChange, ...other } = props;
	const [isLazy, setIsLazy] = useState(true);

	const handleAccept = (value: any) => {
		setIsLazy(value.trim().length === 0);
		onChange({ target: { name: props.name, value } });
	};

	return (
		<IMaskInput
			{...other}
			mask='d.m.Y HH:MM'
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
				HH: {
					mask: IMask.MaskedRange,
					placeholderChar: 'ч',
					from: 0,
					to: 23,
					maxLength: 2,
				},
				MM: {
					mask: IMask.MaskedRange,
					placeholderChar: 'м',
					from: 0,
					to: 59,
					maxLength: 2,
				},
			}}
			lazy={isLazy}
			autofix={'pad'}
			inputRef={ref}
			onAccept={handleAccept}
			overwrite
		/>
	);
});
