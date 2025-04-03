import { IProductAttributesResponse } from '../../types';

export function transformAttributes(
	attributes?: IProductAttributesResponse[]
): {
	[key: string]: { value: any };
} {
	if (!attributes || attributes.length === 0) {
		return {};
	}

	return attributes.reduce((acc, attr) => {
		acc[`${attr.categoryAttributeId};${attr.title}`] = { value: attr.value };
		return acc;
	}, {} as { [key: string]: { value: any } });
}
