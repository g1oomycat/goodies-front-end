import { IOptionSelectMui } from '@/shared/types/options-select-mui';
import { EnumUserRole } from '../../types';
import { UserRoleMeta } from '../constants/role-meta';

export const getRoleOption = (currentRole: EnumUserRole): IOptionSelectMui => {
	return [
		{ id: EnumUserRole.USER, label: UserRoleMeta[EnumUserRole.USER].label },
		...(currentRole === EnumUserRole.SUPER_ADMIN
			? [
					{
						id: EnumUserRole.ADMIN,
						label: UserRoleMeta[EnumUserRole.ADMIN].label,
					},
					{
						id: EnumUserRole.SUPER_ADMIN,
						label: UserRoleMeta[EnumUserRole.SUPER_ADMIN].label,
					},
			  ]
			: []),
	];
};
