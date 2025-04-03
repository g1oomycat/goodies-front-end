import { Box } from '@mui/material';
import {
	GridToolbarColumnsButton,
	GridToolbarContainer,
	GridToolbarExport,
} from '@mui/x-data-grid';

export function CustomToolbar() {
	return (
		<GridToolbarContainer>
			<GridToolbarColumnsButton />

			<Box sx={{ flexGrow: 1 }} />
			<GridToolbarExport
				slotProps={{
					tooltip: { title: 'Экспортировать данные' },
					button: { variant: 'contained' },
				}}
				csvOptions={{
					fileName: 'goodies products',
					delimiter: ';',
					utf8WithBom: true,
					allColumns: true,
				}}
				printOptions={{
					disableToolbarButton: true,
				}}
			/>
		</GridToolbarContainer>
	);
}
