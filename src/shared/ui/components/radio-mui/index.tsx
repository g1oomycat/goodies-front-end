import { Theme } from '@emotion/react';
import { Radio, RadioGroup, SxProps } from '@mui/material';
import classNames from 'classnames';
import {
	Control,
	Controller,
	FieldValues,
	RegisterOptions,
} from 'react-hook-form';
import styles from './styles.module.scss';

type Data = {
	value: string;
	label: string;
};
type Props = {
	name: string;
	data: Data[];
	flexDirection?: 'row' | 'column';
	validation?: Omit<
		RegisterOptions<FieldValues, string>,
		'disabled' | 'valueAsNumber' | 'valueAsDate' | 'setValueAs'
	>;
	control: Control<any>;
	defaultValue?: string | number;
	sx?: SxProps<Theme>;
	className?: string;
};

export const RadioMui = ({
	name,
	data,
	flexDirection = 'row',
	validation,
	control,
	defaultValue,
	sx,
	className,
}: Props) => {
	return (
		<Controller
			name={name}
			rules={validation}
			defaultValue={defaultValue}
			control={control}
			render={({ field }) => (
				<RadioGroup
					{...field}
					value={field.value ?? defaultValue}
					className={styles[flexDirection]}
					style={{ flexDirection }}
				>
					{data.map((item, index) => (
						<div
							className={classNames(styles.item, className, 'gap-7 low')}
							key={index}
						>
							<Radio sx={sx} value={item.value} />
							<span>{item.label}</span>
						</div>
					))}
				</RadioGroup>
			)}
		/>
	);
};
