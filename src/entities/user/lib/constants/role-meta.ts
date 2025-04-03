import { EnumUserRole } from '../../types';

export const UserRoleMeta = {
	[EnumUserRole.USER]: { label: 'Пользователь', color: '#D6EAF8' }, // Светло-голубой
	[EnumUserRole.ADMIN]: { label: 'Админ', color: '#D5F5E3' }, // Светло-зеленый
	[EnumUserRole.SUPER_ADMIN]: {
		label: 'Супер Админ',
		color: '#FADBD8',
	}, // Светло-красный
} as const;
