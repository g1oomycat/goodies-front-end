import { ICategoriesResponse } from '@/entities/category';
import { getRouteCategory } from '@/shared/constants/router';
import { LinkCustom } from '@/shared/ui/components/link';
import { ArrowLeftIcon } from '@/shared/ui/icons/arrow_left';
import styles from './styles.module.scss';

type Props = {
	goToMainMenu: () => void;
	data: ICategoriesResponse[];
};
export const CatalogMenu = ({ goToMainMenu, data }: Props) => {
	return (
		<div className={styles.root}>
			<div>
				<button onClick={goToMainMenu} className={styles.header_button}>
					<span className={styles.header_icon}>
						<ArrowLeftIcon size={20} />
					</span>
					каталог
				</button>
			</div>
			<nav>
				<ul className={styles.catalog_menu}>
					{data.map(category => (
						<li key={category.id}>
							<LinkCustom
								href={getRouteCategory(category.slug)}
								ariaLabel={category.name}
							>
								{category.name}
							</LinkCustom>
						</li>
					))}
				</ul>
			</nav>
		</div>
	);
};
