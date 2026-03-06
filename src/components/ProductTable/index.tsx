import { Table, TableBody, TableContainer, Paper } from '@mui/material'
import { useProductTable } from '../../hooks/useProductTable'
import { TABLE_LABELS } from './tableLabels'
import { tokens } from '../../theme/tokens'
import { ProductTableHeader } from './ProductTableHeader'
import { ProductTableRow } from './ProductTableRow'
import { ProductTableSkeleton } from './ProductTableSkeleton'
import { ProductTableError } from './ProductTableError'
import { ProductTableEmpty } from './ProductTableEmpty'

export const ProductTable = () => {
	const { data, isLoading, isError, emptyMessage } = useProductTable()

	if (isLoading) {
		return (
			<Table size="small" sx={{ width: '100%', tableLayout: 'fixed', minWidth: tokens.table.minWidth }}>
				<ProductTableHeader />
				<TableBody>
					<ProductTableSkeleton />
				</TableBody>
			</Table>
		)
	}

	if (isError) {
		return <ProductTableError />
	}

	if (!data || data.items.length === 0) {
		return <ProductTableEmpty message={emptyMessage} />
	}

	return (
		<TableContainer component={Paper} sx={{ width: '100%', overflowX: tokens.table.containerOverflowX }}>
			<Table aria-label={TABLE_LABELS.ariaLabel} size="small" sx={{ width: '100%', tableLayout: 'fixed', minWidth: tokens.table.minWidth }}>
				<ProductTableHeader />
				<TableBody>
					{data.items.map((product) => (
						<ProductTableRow key={product.id} product={product} />
					))}
				</TableBody>
			</Table>
		</TableContainer>
	)
}
