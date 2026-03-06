import { TableHead, TableRow, TableCell } from '@mui/material'
import { TABLE_LABELS } from './tableLabels'
import { tokens } from '../../theme/tokens'

const { columnWidths } = tokens.table
const { columns } = TABLE_LABELS

export const ProductTableHeader = () => (
	<TableHead>
		<TableRow>
			<TableCell sx={{ width: columnWidths.id }}>{columns.id}</TableCell>
			<TableCell sx={{ width: columnWidths.name }}>{columns.name}</TableCell>
			<TableCell sx={{ width: columnWidths.category }}>{columns.category}</TableCell>
			<TableCell sx={{ width: columnWidths.price }}>{columns.price}</TableCell>
			<TableCell sx={{ width: columnWidths.stock }} align="center">{columns.stock}</TableCell>
			<TableCell sx={{ width: columnWidths.status }} align="center">{columns.status}</TableCell>
		</TableRow>
	</TableHead>
)
