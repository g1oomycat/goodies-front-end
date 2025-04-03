import { Checkbox, SxProps, Theme } from '@mui/material';
import { ReactNode } from 'react';
import {
	Control,
	Controller,
	FieldValues,
	RegisterOptions,
} from 'react-hook-form';

type Props = {
	name: string;
	label?: ReactNode;
	defaultValue?: boolean;
	validation?: Omit<
		RegisterOptions<FieldValues, string>,
		'disabled' | 'valueAsNumber' | 'valueAsDate' | 'setValueAs'
	>;
	control: Control<any>;
	sx?: SxProps<Theme>;
	className?: string;
	position?: 'flex-start' | 'center';
};

export const CheckboxMui = ({
	name,
	label,
	validation,
	control,
	defaultValue,
	sx,
	className,
	position = 'flex-start',
}: Props) => {
	return (
		<Controller
			name={name}
			control={control}
			rules={validation}
			defaultValue={defaultValue}
			render={({ field, fieldState: { error } }) => (
				<div className={className}>
					<div
						style={{ display: 'flex', alignItems: position }}
						className='gap-7'
					>
						<Checkbox {...field} checked={field.value} sx={sx} />
						{label && (
							<div style={{ display: 'flex', flexDirection: 'column' }}>
								{label}
								{!!error && (
									<p className='fs-xs-3 mt-5 error'>{error.message}</p>
								)}
							</div>
						)}
					</div>
				</div>
			)}
		/>
	);
};
