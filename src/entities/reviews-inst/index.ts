export { adminReviewsInstService, reviewsInstService } from './api/index';
export { reviewsInstColumns, reviewsInstRows } from './lib/index';
export { EnumReviewsInstSort } from './types/index';
export type {
	IFilterReviewsInst,
	IGetAllReviewsInstResponse,
	IReviewsInstCreate,
	IReviewsInstForm,
	IReviewsInstParams,
	IReviewsInstResponse,
	IReviewsInstSort,
	IReviewsInstUpdate,
} from './types/index';

export {
	createReviewInstAdmin,
	deleteBulkReviewInstAdmin,
	deleteReviewInstAdmin,
	getAllReviewsInst,
	getOneReviewInstAdmin,
	updateReviewInstAdmin,
} from './model';

export { ReviewsInstCard } from './ui';
