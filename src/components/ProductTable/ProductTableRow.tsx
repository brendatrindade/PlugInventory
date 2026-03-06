import { TableRow, TableCell, Chip, Box } from '@mui/material'
import { useSearchParams } from 'react-router-dom'
import { formatPrice } from '../../utils/formatters'
import type { ProductTableRowProps } from '../../types'

const truncateCellSx = {
	display: 'block',
	maxWidth: '100%',
	overflow: 'hidden',
	textOverflow: 'ellipsis',
	whiteSpace: 'nowrap' as const,
	fontSize: { xs: 11, sm: 13 },
} as const

export const ProductTableRow = ({ product }: ProductTableRowProps) => {
	const [, setSearchParams] = useSearchParams()
	const isClickable = product.status === 'Ativo'

	function handleClick() {
		if (!isClickable) return
		setSearchParams((prev) => {
			const next = new URLSearchParams(prev)
			next.set('productId', String(product.id))
			return next
		})
	}

	return (
		<TableRow
			hover={isClickable}
			onClick={handleClick}
			data-cy="product-row"
			sx={{
				cursor: isClickable ? 'pointer' : 'default',
				opacity: isClickable ? 1 : 0.5,
				transition: 'background 0.2s',

				'&:hover': {
					backgroundColor: isClickable ? 'action.hover' : 'inherit',
				},
			}}
		>
			<TableCell sx={{ overflow: 'hidden' }}>
				<Box component="span" sx={truncateCellSx} title={String(product.id)}>
					{product.id}
				</Box>
			</TableCell>
			<TableCell sx={{ overflow: 'hidden' }}>
				<Box component="span" sx={truncateCellSx} title={product.name}>
					{product.name}
				</Box>
			</TableCell>
			<TableCell sx={{ overflow: 'hidden' }}>
				<Box component="span" sx={truncateCellSx} title={product.category}>
					{product.category}
				</Box>
			</TableCell>
			<TableCell sx={{ overflow: 'hidden' }}>
				<Box component="span" sx={truncateCellSx} title={formatPrice(product.price)}>
					{formatPrice(product.price)}
				</Box>
			</TableCell>
			<TableCell align="center" sx={{ overflow: 'hidden' }}>
				<Box component="span" sx={truncateCellSx} title={String(product.stock)}>
					{product.stock}
				</Box>
			</TableCell>
			<TableCell align="center">
				<Box sx={{ overflow: 'hidden', maxWidth: '100%' }} title={product.status}>
					<Chip
						label={product.status}
						color={product.status === 'Ativo' ? 'success' : 'default'}
						variant={product.status === 'Ativo' ? 'filled' : 'outlined'}
						size="small"
						sx={{ fontSize: 11 }}
						data-cy="product-status-chip"
					/>
				</Box>
			</TableCell>
		</TableRow>
	)
}
