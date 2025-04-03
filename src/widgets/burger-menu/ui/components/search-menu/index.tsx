'use client';

import { useSearchDebounce } from '@/features/search-debounce';

import { getRouteSearch } from '@/shared/constants/router';
import { ButtonIcon } from '@/shared/ui/components/button-icon';
import { ArrowRightIcon } from '@/shared/ui/icons/arrow_right';
import { usePathname, useRouter } from 'next/navigation';
import { useState } from 'react';

import { useSearchHistory } from '@/widgets/burger-menu/model/search-menu';
import { SearchList } from './search-list';
import styles from './styles.module.scss';

const POPULAR_SEARCHES = [
	'кольцо',
	'серьги',
	'браслет',
	'золотое',
	'серебренное',
];

type Props = {
	closeMenu: () => void;
};

export const SearchMenu = ({ closeMenu }: Props) => {
	const { push } = useRouter();
	const pathname = usePathname();
	const { allData, setValue, value } = useSearchDebounce({ limit: 6 });
	const { history, addHistory, deleteHistory } = useSearchHistory();

	const [disabled, setDisabled] = useState(false);

	// Отправка запроса
	const onSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		if (!value.trim()) return;

		setDisabled(true);
		addHistory(value);
		push(getRouteSearch(value));
		console.log(pathname);

		if (pathname === '/search') closeMenu();
	};

	return (
		<div className={styles.catalog_menu}>
			<form
				className={styles.root}
				aria-disabled={disabled}
				onSubmit={onSubmit}
			>
				<div className={styles.input}>
					<input
						type='text'
						placeholder='хочу купить'
						value={value}
						onChange={e => setValue(e.target.value.trim())}
					/>
				</div>

				<ButtonIcon type='submit' disabled={!value} className={styles.button}>
					<ArrowRightIcon size={30} />
				</ButtonIcon>
			</form>

			<nav className={styles.results}>
				{/* Ничего не найдено */}
				{value && allData?.[0]?.length === 0 && allData?.[1]?.length === 0 && (
					<p>Ничего не найдено. Попробуйте изменить запрос.</p>
				)}

				{/* История поиска */}
				{!value && history.length > 0 && (
					<SearchList
						title='История'
						items={history}
						onDelete={deleteHistory}
						onClick={setValue}
					/>
				)}

				{/* Популярные запросы */}
				{!value && (
					<SearchList
						title='Популярные запросы'
						items={POPULAR_SEARCHES}
						onClick={setValue}
					/>
				)}

				{/* Товары */}
				{value && !!allData?.[0]?.length && (
					<SearchList title='Товары' items={allData[0]} isProduct />
				)}

				{/* Категории */}
				{value && !!allData?.[1]?.length && (
					<SearchList title='Категории' items={allData[1]} isProduct />
				)}
			</nav>
		</div>
	);
};
