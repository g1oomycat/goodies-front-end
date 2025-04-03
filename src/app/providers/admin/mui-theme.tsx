import { createTheme } from '@mui/material/styles';

const adminTheme = createTheme({
	palette: {
		primary: {
			main: '#000000', // Основной цвет (черный)
		},
		// background: {
		// 	default: '#000000', // Цвет фона
		// 	paper: '#1c1c1c', // Цвет элементов на фоне
		// },
		// text: {
		// 	primary: '#ffffff', // Основной цвет текста
		// 	secondary: '#b3b3b3', // Второстепенный цвет текста
		// },
	},
	typography: {
		fontFamily: '"GraphikLCG", "Arial", sans-serif', // Ваш шрифт
		fontSize: 24, // Базовый размер шрифта (в пикселях)
	},
	components: {
		MuiFormHelperText: {
			styleOverrides: {
				root: ({ theme }) => ({
					marginLeft: 0, // Убираем отступ слева
					[theme.breakpoints.down('sm')]: {
						fontSize: '1.1rem',
					},
					[theme.breakpoints.up('sm')]: {
						fontSize: '1.2rem',
					},
				}),
			},
		},
		MuiCheckbox: {
			styleOverrides: {
				root: ({ theme }) => ({
					padding: '0rem',
					'&:hover': {
						backgroundColor: 'transparent', // Убираем эффект ховера
					},
					[theme.breakpoints.down('sm')]: {
						'& .MuiSvgIcon-fontSizeMedium': {
							width: '2rem',
							height: '2rem',
						},
					},
					[theme.breakpoints.up('sm')]: {
						'& .MuiSvgIcon-fontSizeMedium': {
							width: '2.25rem',
							height: '2.25rem',
						},
					},
					[theme.breakpoints.up('md')]: {
						'& .MuiSvgIcon-fontSizeMedium': {
							width: '2.5rem',
							height: '2.5rem',
						},
					},
				}),
			},
		},
	},
});

export default adminTheme;
