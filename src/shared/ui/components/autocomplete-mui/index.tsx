'use client';
import { IOptionSelectMui } from '@/shared/types/options-select-mui';
import { Autocomplete, SxProps, Theme } from '@mui/material';
import TextField from '@mui/material/TextField';
import { ReactNode } from 'react';
import {
	Control,
	Controller,
	FieldValues,
	RegisterOptions,
} from 'react-hook-form';

type Props = {
	name: string;
	options: IOptionSelectMui;
	validation?: Omit<
		RegisterOptions<FieldValues, string>,
		'disabled' | 'valueAsNumber' | 'valueAsDate' | 'setValueAs'
	>;
	placeholder?: string;
	size?: 'small' | 'medium';
	control: Control<any>;
	defaultValue?: string;
	variant?: 'outlined' | 'filled' | 'standard';
	label?: ReactNode;
	sx?: SxProps<Theme>;
	sxPopper?: SxProps<Theme>;
};

export const AutocompleteMui = ({
	name,
	placeholder,
	validation,
	size,
	control,
	defaultValue,
	label,
	options,
	variant = 'outlined',
	sx,
	sxPopper,
}: Props) => {
	// Приводим options к единому виду (массив объектов)
	const normalizedOptions =
		typeof options[0] === 'string'
			? (options as string[]).map(option => ({ id: option, label: option }))
			: (options as { id: string; label: string }[]);

	return (
		<Controller
			name={name}
			rules={validation}
			defaultValue={defaultValue}
			render={({ field, fieldState: { error } }) => (
				<Autocomplete
					options={normalizedOptions}
					getOptionLabel={option => option.label}
					value={
						normalizedOptions.find(option => option.id === field.value) || null
					}
					onChange={(_, newValue) => field.onChange(newValue?.id || null)}
					isOptionEqualToValue={(option, value) => option?.id === value?.id}
					slotProps={{
						popper: {
							sx: sxPopper,
						},
					}}
					renderInput={params => (
						<TextField
							{...params}
							placeholder={placeholder}
							fullWidth
							variant={variant}
							size={size}
							label={label}
							helperText={error?.message}
							error={!!error}
							sx={sx}
						/>
					)}
				/>
			)}
			control={control}
		/>
	);
};
