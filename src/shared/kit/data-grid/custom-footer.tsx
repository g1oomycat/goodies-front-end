import { ButtonCustom } from '@/shared/ui/components/button';
import {
	GridFooterContainer,
	GridPagination,
	GridRowSelectionModel,
} from '@mui/x-data-grid';

interface CustomFooterProps {
	selectedRows: GridRowSelectionModel;
	disabled?: boolean;
	isLoading?: boolean;
	onDelete?: () => void;
}
export function CustomFooter({
	selectedRows,
	onDelete,
	disabled,
	isLoading,
}: CustomFooterProps) {
	return (
		<GridFooterContainer>
			{!!onDelete && (
				<ButtonCustom
					size='s'
					onClick={onDelete}
					disabled={selectedRows.length === 0 || disabled}
					isLoading={isLoading}
					style={{ marginLeft: 12 }}
					mode='admin'
				>
					Удалить {selectedRows.length > 0 ? `(${selectedRows.length})` : ''}
				</ButtonCustom>
			)}

			<GridPagination />
		</GridFooterContainer>
	);
}
