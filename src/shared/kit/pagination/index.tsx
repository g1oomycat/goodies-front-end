import { ICreateQueryString } from '@/shared/types/create-query-string';
import { Pagination } from 'antd';
import './pagination.scss';

type Props = {
	limit: number;
	page: number;

	createQueryString: (params: ICreateQueryString) => void;
	totalCount: number;
};

export const PaginationANTD = ({
	limit,
	createQueryString,
	page,

	totalCount,
}: Props) => {
	return (
		<Pagination
			align='center'
			pageSize={limit}
			total={totalCount}
			current={page ?? 1}
			className={'mt-30'}
			hideOnSinglePage={true}
			onChange={page =>
				createQueryString({
					paramsToUpdate: { page: page.toString() },
				})
			}
		/>
	);
};
