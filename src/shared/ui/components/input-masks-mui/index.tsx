import { TextMaskCustomDate } from '@/shared/components/text-mask-custom/date';
import { TextMaskCustomDateTime } from '@/shared/components/text-mask-custom/date-time';
import { TextMaskCustomPhone } from '@/shared/components/text-mask-custom/phone';
import {
	FormControl,
	FormHelperText,
	Input,
	OutlinedInput,
	SxProps,
	Theme,
} from '@mui/material';
import { ReactNode } from 'react';
import {
	Control,
	Controller,
	FieldValues,
	RegisterOptions,
} from 'react-hook-form';

type Props = {
	name: string;
	type: 'date' | 'phone' | 'dateTime';
	validation?: Omit<
		RegisterOptions<FieldValues, string>,
		'disabled' | 'valueAsNumber' | 'valueAsDate' | 'setValueAs'
	>;
	placeholder?: string;
	size?: 'small' | 'medium';
	control: Control<any>;
	defaultValue?: string | number;
	variant?: 'outlined' | 'standard';
	label?: ReactNode;
	helperText?: string;
	sx?: SxProps<Theme>;
};

export const InputMuiMask = ({
	name,
	placeholder,
	validation,
	size,
	control,
	defaultValue,
	label,
	type,
	variant = 'outlined',
	sx,
	helperText,
}: Props) => {
	const getInputComponent = () => {
		switch (type) {
			case 'date':
				return TextMaskCustomDate;
			case 'phone':
				return TextMaskCustomPhone;
			case 'dateTime':
				return TextMaskCustomDateTime;
			default:
				return undefined;
		}
	};

	const InputComponent = variant === 'outlined' ? OutlinedInput : Input;

	return (
		<Controller
			name={name}
			rules={validation}
			defaultValue={defaultValue}
			render={({ field, fieldState: { error } }) => (
				<FormControl fullWidth error={!!error} sx={sx} variant={variant}>
					{label}
					<InputComponent
						{...field}
						fullWidth
						size={size}
						placeholder={placeholder}
						inputComponent={getInputComponent() as any}
					/>
					{(!!error || !!helperText) && (
						<FormHelperText>{error?.message || helperText}</FormHelperText>
					)}
				</FormControl>
			)}
			control={control}
		/>
	);
};
