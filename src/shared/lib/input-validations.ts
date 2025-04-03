import { isValid, parse } from 'date-fns';

const REQUIRED_TEXT = 'обязательное поле';

export const telephoneMask = [
	'+',
	'7',
	' ',
	'(',
	/\d/,
	/\d/,
	/\d/,
	')',
	' ',
	/\d/,
	/\d/,
	/\d/,
	'-',
	/\d/,
	/\d/,
	'-',
	/\d/,
	/\d/,
];

export const requiredValidation = {
	required: REQUIRED_TEXT,
};

export const nameValidation = (required?: boolean) => ({
	required: required ? REQUIRED_TEXT : undefined,
	validate: (value: string) => {
		if (!required && !value) {
			return true;
		}

		if (!/^[А-Яа-яӘәҒғҚқҢңӨөҰұҮүҺһІіЁё\-]+$/i.test(value)) {
			return 'только кириллица и тире';
		}
		return true;
	},
});
export const numberValidation = (
	required?: boolean,
	min?: number,
	max?: number
) => ({
	required: required ? REQUIRED_TEXT : undefined,
	validate: (value: number) => {
		if (!required && (value === null || value === undefined)) {
			return true;
		}

		if (isNaN(value)) {
			return 'Введите корректное число';
		}

		if (min !== undefined && value < min) {
			return `Значение должно быть не меньше ${min}`;
		}

		if (max !== undefined && value > max) {
			return `Значение должно быть не больше ${max}`;
		}

		return true;
	},
});
export const productNameValidation = (required?: boolean) => ({
	required: required ? REQUIRED_TEXT : undefined,
	validate: (value: string) => {
		if (!required && !value) {
			return true;
		}

		if (!/^[А-Яа-яӘәҒғҚқҢңӨөҰұҮүҺһІіЁёA-Za-z0-9\s\-,.()<>]+$/i.test(value)) {
			return 'Неверное название товара';
		}
		return true;
	},
});
// export const numberValidation = {
// 	required: REQUIRED_TEXT,
// 	validate: value => {
// 		if (!/^[0-9]+$/i.test(value)) {
// 			return 'Только цифры';
// 		}
// 		return true;
// 	},
// };
export const telephoneValidation = (required?: boolean) => ({
	required: required ? REQUIRED_TEXT : undefined,
	validate: (value: string) => {
		if (!required && !value) {
			return true;
		}
		if (
			value.replace(/[\s_\-\+\(\)]+/g, '').length > 1 &&
			value.replace(/[\s_\-\+\(\)]+/g, '').length < 11
		) {
			return 'некорректный номер';
		}
		return true;
	},
});

export const addressValidation = (required?: boolean) => ({
	required: required ? REQUIRED_TEXT : undefined,
	validate: (value: string) => {
		if (!value && !required) {
			return true;
		}
		if (!/^[А-Яа-яё0-9.,\-/ ]+$/.test(value.trim())) {
			return 'некорректный адрес';
		}

		return true;
	},
});
export const emailValidation = (required?: boolean) => ({
	required: required ? REQUIRED_TEXT : undefined,
	validate: (value: string) => {
		if (!value && !required) {
			return true;
		}
		const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
		if (!emailRegex.test(value)) {
			return 'некорректный Email';
		}
		return true;
	},
});
export const passwordValidation = (required?: boolean) => ({
	required: required ? 'пароль обязателен' : undefined,

	validate: (value: string) => {
		if (!value && !required) {
			return true;
		}

		const errors: string[] = [];

		if (value.length < 8) {
			errors.push('- пароль должен быть не менее 8 символов');
		}
		if (!/\d/.test(value)) {
			errors.push('- пароль должен содержать хотя бы одну цифру');
		}
		if (!/[a-zA-Zа-яА-ЯёЁ]/.test(value)) {
			errors.push('- пароль должен содержать хотя бы одну букву');
		}

		return errors.length > 0 ? errors.join('. ') : true;
	},
});

export const dateValidation = (
	required?: boolean,
	comparisonWithCurrentYear?: 'less' | 'greater'
) => ({
	required: required ? REQUIRED_TEXT : undefined,

	validate: (value: string) => {
		if (!value && !required) {
			return true;
		}
		const parsedDate = parse(value, 'dd.MM.yyyy', new Date());

		// Проверяем, что дата валидная
		if (!isValid(parsedDate)) {
			return 'неверная дата';
		}

		// Проверяем, что год не превышает текущий

		if (comparisonWithCurrentYear) {
			const currentYear = new Date().getFullYear();
			if (
				comparisonWithCurrentYear === 'greater'
					? parsedDate.getFullYear() < currentYear
					: parsedDate.getFullYear() > currentYear
			) {
				return `год не может быть ${
					comparisonWithCurrentYear === 'greater' ? 'меньше' : 'больше'
				} текущего`;
			}
		}

		return true;
	},
});

export const urlValidation = (required?: boolean) => ({
	required: required ? REQUIRED_TEXT : undefined,
	validate: (value: string) => {
		if (!required && !value) {
			return true;
		}

		// Разрешаем URL, которые начинаются со слэша (например, "/about")
		const urlRegex =
			/^(\/[\w-./?%&=]*)$|^(https?:\/\/)?([\w-]+\.)+[\w-]+(\/[\w-./?%&=]*)?$/i;

		if (!urlRegex.test(value)) {
			return 'некорректный URL';
		}

		return true;
	},
});

export const textValidation = (required?: boolean) => ({
	required: required ? REQUIRED_TEXT : undefined,
	validate: (value: string) => {
		if (!required && !value) {
			return true;
		}

		// Разрешаем буквы кириллицы (включая казахские), латиницы, цифры, пробелы и почти все распространенные символы
		if (!/^[\p{L}\p{N}\s\-.,!@#$%^&*()_+=:;"'<>?/{}[\]№«»—–]+$/u.test(value)) {
			return 'Некорректный текст';
		}

		return true;
	},
});
