'use';
import { DropdownSort } from '@/shared/kit/dropdown-sort';

import { ICreateQueryString } from '@/shared/types/create-query-string';
import { ISortOption } from '@/shared/types/sort';
import classNames from 'classnames';
import styles from './styles.module.scss';
type Props = {
	lenProducts?: number;
	pluralizeFunction: (number: number) => string;

	createQueryString: (params: ICreateQueryString) => void;
	sortList: ISortOption[];
	sort: string;
};

export const TotalAndSortBlock = ({
	lenProducts,
	createQueryString,
	pluralizeFunction,

	sort,
	sortList,
}: Props) => {
	return (
		<div className={classNames(styles.nav, 'fs-m-1')}>
			<div className={styles.quantity}>
				{!lenProducts ? 'Загрузка...' : `[${pluralizeFunction(lenProducts)}]`}
			</div>
			<div className={styles.sort}>
				<DropdownSort
					sort={sort}
					sortList={sortList}
					createQueryString={createQueryString}
				/>
			</div>
		</div>
	);
};
