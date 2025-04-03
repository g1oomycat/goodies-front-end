'use client';
import { DropdownArrowIcon } from '@/shared/ui/icons/dropdown-arrow';

import { useClickOutside } from '@/shared/hooks/useClickOutside';
import { ICreateQueryString } from '@/shared/types/create-query-string';
import { ISortOption } from '@/shared/types/sort';
import { AnimatePresence, motion } from 'framer-motion';
import { useState } from 'react';
import styles from './styes.module.scss';

type Props = {
	createQueryString: (params: ICreateQueryString) => void;
	sortList: ISortOption[];
	sort: string;
};
// Список сортировок

export const DropdownSort = ({ createQueryString, sortList, sort }: Props) => {
	const [isOpen, setIsOpen] = useState(false);
	const [selectedOption, setSelectedOption] = useState(
		sortList.filter(el => el.sort === sort)[0]
	);

	// Обработчик изменения сортировки
	const handleOptionClick = (option: ISortOption) => {
		setSelectedOption(option);
		createQueryString({
			paramsToUpdate: { sort: option.sort, page: '' },
		});
		setIsOpen(false); // Закрываем меню
	};
	const dropdownRef = useClickOutside(
		() => setIsOpen(false),
		undefined,
		!isOpen
	);
	return (
		<div className={styles.root} ref={dropdownRef}>
			<div
				className={styles.title}
				onClick={() => {
					setIsOpen(!isOpen);
					console.log('onClick');
				}}
			>
				<span>{selectedOption.label}</span>
				<div className={styles.icon}>
					<DropdownArrowIcon isOpen={isOpen} />
				</div>
			</div>

			{/* Выпадающее меню */}
			<AnimatePresence>
				{isOpen && (
					<motion.div
						className={styles.menu}
						initial={{ opacity: 0, y: 30, scale: 0.9 }}
						animate={{ opacity: 1, y: 0, scale: 1 }}
						exit={{ opacity: 0, y: 30, scale: 0.9 }}
						transition={{ duration: 0.2, ease: 'easeInOut' }}
					>
						{sortList.map(option => (
							<div
								key={option.label}
								className={styles.menu_item}
								onClick={() => handleOptionClick(option)}
								style={{
									color:
										option.label === selectedOption.label
											? 'var(--color-pink)'
											: '',
								}}
							>
								{option.label}
							</div>
						))}
					</motion.div>
				)}
			</AnimatePresence>
		</div>
	);
};
