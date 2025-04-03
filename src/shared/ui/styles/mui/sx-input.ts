export const sxMuiInput = {
	backgroundColor: 'transparent !important',
	color: 'var(--color-text) !important',

	'& .MuiButtonBase-root': {
		color: 'var(--color-text) !important',
	},

	'& .MuiOutlinedInput-notchedOutline': {
		borderColor: 'var(--color-border) !important',
		'&:hover': {
			borderColor: 'red !important',
		},
	},
	'& .MuiOutlinedInput-root': {
		'&:hover .MuiOutlinedInput-notchedOutline': {
			borderColor: 'var(--color-border) !important', // 🔥 Работает ховер на input
		},
		'&.Mui-focused .MuiOutlinedInput-notchedOutline': {
			borderColor: 'var(--color-border) !important',
		},
		// 🔥 Бордер красный при ошибке
		'&.Mui-error .MuiOutlinedInput-notchedOutline': {
			borderColor: 'red !important',
		},
	},

	'& .MuiInputBase-input': {
		color: 'var(--color-text) !important',
	},
};
