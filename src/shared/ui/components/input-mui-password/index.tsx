'use client ';

import { Theme } from '@emotion/react';
import {
	FormControl,
	FormHelperText,
	IconButton,
	Input,
	InputAdornment,
	OutlinedInput,
	SxProps,
} from '@mui/material';
import { useState } from 'react';
import {
	Control,
	Controller,
	FieldValues,
	RegisterOptions,
} from 'react-hook-form';
import { VisibilityIcon } from '../../icons/visibility';
import { VisibilityOffIcon } from '../../icons/visibility-off';

type Props = {
	name: string;

	validation?: Omit<
		RegisterOptions<FieldValues, string>,
		'disabled' | 'valueAsNumber' | 'valueAsDate' | 'setValueAs'
	>;
	placeholder?: string;
	size?: 'small' | 'medium';
	control: Control<any>;
	defaultValue?: string | number;
	variant?: 'outlined' | 'standard';
	sx?: SxProps<Theme>;
	helperText?: string; // Для текста ошибки или подсказки
};

export const InputMuiPassword = ({
	name,
	placeholder,
	validation,
	size,
	control,
	defaultValue,
	variant = 'outlined',
	sx,
}: Props) => {
	const [showPassword, setShowPassword] = useState(false);
	const handleClickShowPassword = () => setShowPassword(show => !show);
	const InputComponent = variant === 'outlined' ? OutlinedInput : Input;
	return (
		<Controller
			name={name}
			rules={validation}
			defaultValue={defaultValue}
			render={({ field, fieldState: { error } }) => {
				const errors = error?.message?.split('.') ?? [];
				return (
					<FormControl fullWidth error={!!error}>
						<InputComponent
							{...field}
							fullWidth
							type={showPassword ? 'text' : 'password'}
							size={size}
							placeholder={placeholder}
							sx={sx}
							endAdornment={
								<InputAdornment position='end'>
									<IconButton
										aria-label={
											showPassword
												? 'hide the password'
												: 'display the password'
										}
										onClick={handleClickShowPassword}
									>
										{showPassword ? <VisibilityOffIcon /> : <VisibilityIcon />}
									</IconButton>
								</InputAdornment>
							}
						/>
						{/* Показываем текст ошибки или подсказки */}
						{error &&
							errors.map((er, index) => (
								<FormHelperText key={index}>{er}</FormHelperText>
							))}
					</FormControl>
				);
			}}
			control={control}
		/>
	);
};
