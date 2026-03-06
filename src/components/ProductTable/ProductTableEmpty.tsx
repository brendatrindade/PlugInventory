import { Box, Typography } from '@mui/material'
import { tokens } from '../../theme/tokens'
import type { ProductTableEmptyProps } from '../../types'

export const ProductTableEmpty = ({ message }: ProductTableEmptyProps) => (
	<Box sx={{ p: tokens.table.emptyStatePadding, textAlign: 'center' }}>
		<Typography variant="h6">{message}</Typography>
	</Box>
)
