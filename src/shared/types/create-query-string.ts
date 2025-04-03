export type ICreateQueryString = {
	paramsToUpdate: Record<string, string | number | undefined | boolean>;
	refetch?: () => void;
};
