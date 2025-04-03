'use client';
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
	palette: {
		primary: {
			main: '#000000', // Основной цвет (черный)
		},
	},
	typography: {
		fontFamily: '"GraphikLCG", "Arial", sans-serif', // Ваш шрифт
		fontSize: 10, // Базовый размер шрифта (в пикселях)
	},
	breakpoints: {
		values: {
			xs: 0, // До 480px (например, мобильные)
			sm: 600, // 480px - 768px (планшеты)
			md: 1020, // 768px - 1024px (маленькие ноутбуки)
			lg: 1360, // 1024px - 1440px (большие экраны)
			xl: 1680, // 1440px+ (очень большие экраны)
		},
	},
	components: {
		MuiRadio: {
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
		MuiInput: {
			styleOverrides: {
				root: ({ theme }) => ({
					fontSize: 'inherit',
					paddingBottom: '0.3em',
					'&:hover:not(.Mui-disabled, .Mui-error)::before': {
						borderBottomWidth: '1px',
					},
					'&::after': {
						borderBottomWidth: '1px',
					},
				}),
			},
		},

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

export default theme;
