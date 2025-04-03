'use client';
import { SxProps } from '@mui/material';
import { Theme } from '@mui/system';
import { MuiColorInput } from 'mui-color-input';
import { ReactNode } from 'react';
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
	label?: ReactNode;
	sx?: SxProps<Theme>;
};

export const InputMuiColorPicker = ({
	name,
	placeholder,
	validation,
	size,
	control,
	defaultValue,
	label,
	variant = 'outlined',
	sx,
}: Props) => {
	return (
		<Controller
			name={name}
			rules={validation}
			defaultValue={defaultValue ?? ''}
			render={({ field, fieldState: { error } }) => (
				<MuiColorInput
					{...field}
					label={label}
					fullWidth
					size={size}
					variant={variant}
					helperText={error && error?.message}
					error={!!error}
					placeholder={placeholder}
					sx={sx}
					format='hex'
				/>
			)}
			control={control}
		/>
	);
};
