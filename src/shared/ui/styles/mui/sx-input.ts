export const sxMuiInput = {
	backgroundColor: 'transparent !important',
	color: 'var(--color-text) !important',

	'& .MuiButtonBase-root': {
		color: 'var(--color-text) !important',
	},

	// '& .MuiOutlinedInput-notchedOutline': {
	// 	borderColor: 'var(--color-border) !important',
	// },
	'& .MuiOutlinedInput-root': {
		borderColor: 'var(--color-border) !important',
		color: 'var(--color-text) !important',
		'& .MuiOutlinedInput-notchedOutline': {
			borderColor: 'var(--color-border) !important',
		},
		'&:hover .MuiOutlinedInput-notchedOutline': {
			borderColor: 'var(--color-border) !important', // 🔥 Работает ховер на input
		},
		'&.Mui-focused .MuiOutlinedInput-notchedOutline': {
			borderColor: 'var(--color-border) !important',
		},
		// 🔥 Бордер красный при ошибке
		'&.Mui-error .MuiOutlinedInput-notchedOutline': {
			borderColor: 'var(--color-red) !important',
		},
	},

	'&.MuiInputBase-input': {
		borderColor: 'var(--color-border) !important',
		color: 'var(--color-text) !important',
	},
};
