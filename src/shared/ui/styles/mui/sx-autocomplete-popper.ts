export const sxAutocompletePopper = {
	backgroundColor: 'var(--color-bg-secondary) !important',
	border: '1px solid var(--color-border)',
	borderRadius: '5px',

	'& .MuiAutocomplete-paper': {
		backgroundColor: 'var(--color-bg-secondary) !important',
	},
	'& .MuiAutocomplete-option': {
		color: 'var(--color-text)',
		'&:hover': {
			backgroundColor: 'var(--color-bg-active)',
		},
		'&[aria-selected="true"]': {
			backgroundColor: 'var(--color-bg-active)',
		},
	},
};
