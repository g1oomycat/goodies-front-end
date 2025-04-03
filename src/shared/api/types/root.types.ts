export interface IBase {
	id: string;
	createdAt: string;
	updatedAt: string;
}

export interface IBulkResponse {
	count: number;
}

export interface IGetAllBase {
	page: number;
	limit: number;
	totalCount: number;
	totalResult: number;
}
