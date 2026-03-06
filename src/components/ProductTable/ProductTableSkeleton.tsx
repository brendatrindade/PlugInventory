import { TableRow, TableCell, Skeleton } from '@mui/material'
import { tokens } from '../../theme/tokens'

export const ProductTableSkeleton = () => {
	const { skeletonRows, skeletonWidths } = tokens.table
	return (
		<>
			{Array.from({ length: skeletonRows }, (_, i) => (
				<TableRow key={i}>
					{skeletonWidths.map((w, j) => (
						<TableCell key={j}><Skeleton width={w} /></TableCell>
					))}
				</TableRow>
			))}
		</>
	)
}
