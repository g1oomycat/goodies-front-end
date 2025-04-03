'use client';

import { Chip, FormHelperText, TextField } from '@mui/material';
import { Theme } from '@mui/material/styles';
import { SxProps } from '@mui/system';
import classNames from 'classnames';
import { useState } from 'react';
import {
	Control,
	Controller,
	FieldValues,
	RegisterOptions,
} from 'react-hook-form';
import styles from './styles.module.scss';

type Props = {
	name: string;
	validation?: Omit<
		RegisterOptions<FieldValues, string>,
		'disabled' | 'valueAsNumber' | 'valueAsDate' | 'setValueAs'
	>;
	placeholder?: string;
	size?: 'small' | 'medium';
	control: Control<any>;
	defaultValue?: string[];

	sx?: SxProps<Theme>;
};

export const InputMultipleMui = ({
	name,
	placeholder,
	validation,
	size,
	control,
	defaultValue = [],

	sx,
}: Props) => {
	const [value, setValue] = useState('');
	const [isFocused, setIsFocused] = useState(false);
	return (
		<Controller
			name={name}
			rules={validation}
			defaultValue={defaultValue}
			control={control}
			render={({
				field: { onChange, value: values },
				fieldState: { error },
			}) => {
				// Гарантируем, что values — массив
				const items = Array.isArray(values) ? values : [];

				const handleEnter = (e: React.KeyboardEvent<HTMLInputElement>) => {
					if (e.key === 'Enter') {
						e.preventDefault();
						if (value.trim() !== '' && !items.includes(value)) {
							onChange([...items, value.trim()]);
							setValue('');
						}
					}
				};

				const handleDelete = (item: string) => {
					onChange(items.filter(v => v !== item));
				};

				return (
					<>
						<div
							className={classNames(
								styles.container,
								!!error ? styles.error : '',
								isFocused ? styles.active : ''
							)}
						>
							{items.length > 0 && (
								<div className={styles.cheaps}>
									{items.map(v => (
										<Chip
											key={v}
											label={v}
											onDelete={() => handleDelete(v)}
											sx={{
												backgroundColor: 'var(--color-bg-secondary)',
												color: 'var(--color-text)',
												border: '1px solid var(--color-border-secondary)',
												'& .MuiChip-deleteIcon': {
													color: 'var(--color-btn-bg)',
													'&:hover': {
														color: 'var(--color-bg-disabled)',
													},
												},
											}}
										/>
									))}
								</div>
							)}
							<TextField
								variant='standard'
								fullWidth
								placeholder={placeholder}
								value={value}
								size={size}
								onChange={e => setValue(e.target.value)}
								onKeyDown={handleEnter}
								onFocus={() => setIsFocused(true)}
								onBlur={() => setIsFocused(false)}
								sx={{
									padding: 0,
									'& .MuiInputBase-root': {
										padding: '0 !important',
										backgroundColor: 'transparent !important',
										color: 'var(--color-text) !important',
									},
									'& .MuiInputBase-input': {
										padding: '0 !important',
									},
									'& .MuiInput-underline:before, & .MuiInput-underline:after': {
										borderBottom: 'none !important',
									},
									'& .MuiInput-underline:hover:before': {
										borderBottom: 'none !important',
									},
								}}
							/>
						</div>
						{!!error && <FormHelperText>{error.message}</FormHelperText>}
					</>
				);
			}}
		/>
	);
};
