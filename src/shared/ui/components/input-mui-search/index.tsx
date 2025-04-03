import {
	FormControl,
	FormHelperText,
	IconButton,
	InputAdornment,
	OutlinedInput,
	SxProps,
	Theme,
} from '@mui/material';

import {
	Control,
	Controller,
	FieldValues,
	RegisterOptions,
} from 'react-hook-form';
import { CloseIcon } from '../../icons/close';
import { SearchIcon } from '../../icons/search';

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
	sx?: SxProps<Theme>;
	helperText?: string; // Для текста ошибки или подсказки
};

export const InputMuiSearch = ({
	name,
	placeholder,
	validation,
	size,
	control,
	defaultValue,
	sx,
}: Props) => {
	return (
		<Controller
			name={name}
			rules={validation}
			defaultValue={defaultValue}
			render={({ field, fieldState: { error } }) => (
				<FormControl fullWidth error={!!error} sx={sx}>
					<OutlinedInput
						{...field}
						fullWidth
						size={size}
						value={field.value ?? ''}
						placeholder={placeholder}
						endAdornment={
							<InputAdornment position='end'>
								{field.value && (
									<IconButton
										aria-label='Очистить'
										onClick={() => field.onChange('')}
									>
										<CloseIcon />
									</IconButton>
								)}
								<IconButton aria-label={'Найти'} type='submit'>
									<SearchIcon />
								</IconButton>
							</InputAdornment>
						}
					/>
					{!!error && <FormHelperText>{error.message}</FormHelperText>}
				</FormControl>
			)}
			control={control}
		/>
	);
};
