import classNames from 'classnames';
import Image from 'next/image';
import { useDropzone } from 'react-dropzone';
import { Control, RegisterOptions, useController } from 'react-hook-form';
import { ReactSortable } from 'react-sortablejs';
import { SkeletonMui } from '../skeleton';
import styles from './styles.module.scss';

interface Props {
	name: string;
	control: Control<any>;
	maxFiles?: number;
	multiple?: boolean;
	rules?: Omit<
		RegisterOptions<any, string>,
		'disabled' | 'valueAsNumber' | 'valueAsDate' | 'setValueAs'
	>;
	defaultValue?: string[];
	isLoading?: boolean;
	title?: string;
}

export const DragDropInput = ({
	name,
	control,
	maxFiles = 1,
	multiple = true,
	rules,
	defaultValue = [],
	isLoading,
	title,
}: Props) => {
	const colsClass = maxFiles > 1 ? 'cols_2' : 'cols_1';
	const { field, formState } = useController({
		name,
		control,
		defaultValue,
		rules,
	});

	const { getRootProps, getInputProps, open } = useDropzone({
		onDrop: acceptedFiles => {
			if (field.value.length + acceptedFiles.length > maxFiles) return;
			const newFiles = acceptedFiles.map(file => ({
				id: URL.createObjectURL(file), // Уникальный ID для сортировки
				file,
			}));
			field.onChange([...field.value, ...newFiles]);
		},
		multiple: multiple,
		accept: { 'image/*': [] },
		maxFiles,
		noClick: true, // Отключаем автоматическое открытие при клике
	});

	const handleRemove = (id: string) => {
		field.onChange(field.value.filter((item: any) => item.id !== id));
	};

	return (
		<div>
			{title && (
				<div className='fs-s-1 low' style={{ marginBottom: '1em' }}>
					{isLoading ? <SkeletonMui width='70%' /> : title}
				</div>
			)}
			<div
				{...getRootProps()}
				className={styles.root}
				style={{ borderColor: !!formState.errors[name] ? 'red' : '' }}
			>
				<input {...getInputProps()} />

				<div className={styles.wrapper}>
					<div
						className={classNames(
							styles.grid_container_plug,
							styles[colsClass]
						)}
					>
						{Array.from({ length: maxFiles }).map((_, index) => (
							<div className={styles.grid_item_plug} key={index} onClick={open}>
								{isLoading ? (
									<SkeletonMui variant='rounded' width='100%' height='100%' />
								) : (
									<span>+</span>
								)}
							</div>
						))}
					</div>

					{!!field.value.length && (
						<ReactSortable
							list={field.value}
							setList={newOrder => field.onChange(newOrder)}
							className={classNames(
								styles.grid_container_image,
								styles[colsClass]
							)}
						>
							{field.value.map((item: any, index: number) => (
								<div
									key={index}
									className={styles.grid_item_image}
									onClick={open} // Открываем загрузку только по заглушке
								>
									<Image
										key={index}
										src={item.id}
										alt='preview'
										onClick={e => e.stopPropagation()} // Фото не вызывает загрузку
										className={styles.image}
										width={350}
										height={350}
									/>

									<div className={styles.hover_item}>
										<span className={styles.title}>{`[${index + 1}]`}</span>
										<button
											type='button'
											onClick={e => {
												e.stopPropagation();
												handleRemove(item.id);
											}}
											className={styles.delete}
										>
											×
										</button>
									</div>
								</div>
							))}
						</ReactSortable>
					)}
				</div>
			</div>
		</div>
	);
};
