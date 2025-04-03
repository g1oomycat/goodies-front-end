import { getRouteProduct, getRouteSearch } from '@/shared/constants/router';
import { ButtonCustom } from '@/shared/ui/components/button';
import { ButtonIcon } from '@/shared/ui/components/button-icon';
import { CloseIcon } from '@/shared/ui/icons/close';
import { HistoryIcon } from '@/shared/ui/icons/history';
import { useRouter } from 'next/navigation';
import styles from './styles.module.scss';

type SearchListProps = {
	title: string;
	items: string[] | { id: string; name: string; slug: string }[];
	isProduct?: boolean;
	onDelete?: (value: string) => void;
	onClick?: (value: string) => void;
};

export const SearchList = ({
	title,
	items,
	isProduct,
	onDelete,
	onClick,
}: SearchListProps) => {
	const { push } = useRouter();

	const handleClick = (
		item: string | { id: string; name: string; slug: string }
	) => {
		const name = typeof item === 'string' ? item : item.name;
		const slug = typeof item === 'string' ? item : item.slug;

		if (onClick) {
			onClick(name); // Если передан кастомный обработчик, вызываем его
		} else {
			push(isProduct ? getRouteProduct(slug) : getRouteSearch(name)); // По умолчанию навигация
		}
	};

	return (
		<ul className={styles.common_list}>
			<span className={styles.title}>{title}</span>
			{items.map((item, index) => {
				const name = typeof item === 'string' ? item : item.name;

				return (
					<li key={index}>
						<ButtonCustom colorType='none' onClick={() => handleClick(item)}>
							{onDelete && <HistoryIcon style={{ opacity: 0.5 }} />}
							{name}
						</ButtonCustom>

						{onDelete && (
							<ButtonIcon onClick={() => onDelete(name)}>
								<CloseIcon />
							</ButtonIcon>
						)}
					</li>
				);
			})}
		</ul>
	);
};
