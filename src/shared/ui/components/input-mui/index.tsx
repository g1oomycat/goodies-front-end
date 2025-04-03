'use client';
import { SxProps } from '@mui/material';
import TextField from '@mui/material/TextField';
import { Theme } from '@mui/system';
import { HTMLInputTypeAttribute, ReactNode } from 'react';
import {
	Control,
	Controller,
	FieldValues,
	RegisterOptions,
} from 'react-hook-form';

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
	variant?: 'outlined' | 'filled' | 'standard';
	type?: HTMLInputTypeAttribute;
	label?: ReactNode;
	sx?: SxProps<Theme>;
	multiline?: boolean;
};

export const InputMui = ({
	name,
	placeholder,
	validation,
	size,
	control,
	defaultValue,
	label,
	variant = 'outlined',
	sx,
	type,
	multiline,
}: Props) => {
	return (
		<Controller
			name={name}
			rules={validation}
			defaultValue={defaultValue ?? ''}
			render={({ field, fieldState: { error } }) => (
				<TextField
					{...field}
					label={label}
					fullWidth
					size={size}
					variant={variant}
					helperText={error && error?.message}
					error={!!error}
					placeholder={placeholder}
					sx={sx}
					multiline={multiline}
					minRows={3}
					maxRows={6}
					type={type}
				/>
			)}
			control={control}
		/>
	);
};
