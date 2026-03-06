import { Box, TablePagination } from '@mui/material'
import { useProductPagination } from '../../hooks/useProductPagination'
import { PAGINATION_LABELS, formatDisplayedRows, getItemAriaLabel } from './paginationLabels'
import { tokens } from '../../theme/tokens'

export const ProductPagination = () => {
	const { page, size, total, handlePageChange, handleRowsPerPageChange } = useProductPagination()

	return (
		<Box sx={{ display: 'flex', justifyContent: { xs: 'center', md: 'flex-end' }, minWidth: { xs: '100%', md: 'auto' }, mt: tokens.pagination.containerMarginTop }}>
			<TablePagination
				component="div"
				count={total}
				page={page}
				onPageChange={handlePageChange}
				rowsPerPage={size}
				onRowsPerPageChange={handleRowsPerPageChange}
				rowsPerPageOptions={[...tokens.pagination.rowsPerPageOptions]}
				labelRowsPerPage={PAGINATION_LABELS.rowsPerPage}
				labelDisplayedRows={formatDisplayedRows}
				getItemAriaLabel={getItemAriaLabel}
				sx={{
					width: '100%',
					'& .MuiTablePagination-toolbar': { flexWrap: 'wrap', justifyContent: { xs: 'center', md: 'flex-end' }, rowGap: 0.5 },
					'& .MuiTablePagination-actions': { marginLeft: tokens.pagination.actionsMarginLeft },
				}}
			/>
		</Box>
	)
}
