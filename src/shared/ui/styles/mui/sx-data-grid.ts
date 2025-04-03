export const sxStyleDataGrid = {
	backgroundColor: 'var(--color-bg) !important',
	color: 'var(--color-text) !important',
	borderColor: 'var(--color-border-secondary) !important',

	// Заголовок
	'& .MuiDataGrid-columnHeader': {
		backgroundColor: 'var(--color-bg-secondary) !important',
		color: 'var(--color-text) !important',
		fontWeight: 'bold !important',
		borderColor: 'var(--color-border-secondary) !important',
	},
	'& .MuiDataGrid-scrollbarFiller': {
		backgroundColor: 'var(--color-bg-secondary) !important',
		borderColor: 'var(--color-border-secondary) !important',
	},
	'& .MuiDataGrid-row--dynamicHeight': {
		minHeight: '4.5rem !important',
	},
	// Ячейки
	'& .MuiDataGrid-cell': {
		display: 'flex !important',
		alignItems: 'center !important',
		borderTopColor: 'var(--color-border-secondary) !important',
		fontSize: '1.6rem !important',
		borderBottomColor: 'var(--color-border-secondary) !important',
		color: 'var(--color-text-secondary) !important',
		'.MuiDataGrid-booleanCell': {
			color: 'var(--color-text-secondary) !important',
		},
	},

	//  ячейка при фокусе
	'& .MuiDataGrid-cell:focus ': {
		outline: '1px solid var(--border-color)',
	},

	// Футер
	'& .MuiDataGrid-footerContainer': {
		backgroundColor: 'var(--color-bg-secondary) !important',
		color: 'var(--color-text) !important',
		borderColor: 'var(--color-border-secondary) !important',
	},
	// кнопка - три точки
	'& .MuiDataGrid-menuIconButton': {
		color: 'var(--color-text-secondary) !important',
	},
	// кнопка - сортировка
	'& .MuiDataGrid-sortIcon': {
		color: 'var(--color-text-secondary) !important',
	},
	// кнопка - чекбокс
	'& .MuiDataGrid-checkboxInput ': {
		color: 'var(--color-text-secondary) !important',
	},
	// пагинцаия в футере
	'& .MuiTablePagination-toolbar': {
		color: 'var(--color-text) !important',
	},
	// кнопка -  Сортировка
	'& .MuiTablePagination-actions  ': {
		color: 'var(--color-text-secondary) !important',
	},
	// кнопка -  перелистывание страниц
	'& .MuiTablePagination-selectIcon   ': {
		color: 'var(--color-text-secondary) !important',
	},
	// кнопка -  перелистывание страниц дизейбл
	'& .MuiTablePagination-actions .Mui-disabled ': {
		color: 'var(--color-text-secondary) !important',
		opacity: 0.6,
	},

	// Выделенные строки
	'& .MuiDataGrid-row .Mui-selected': {
		backgroundColor: 'var(--color-text-secondary) !important',
	},

	// Наведение на строку
	'& .MuiDataGrid-row:hover': {
		backgroundColor: 'var(--color-bg-secondary) !important',
	},
};
