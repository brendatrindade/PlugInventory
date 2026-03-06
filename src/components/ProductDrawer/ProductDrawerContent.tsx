import { Box, Typography, CircularProgress } from '@mui/material'
import { ProductDetails } from './ProductDetails'
import { tokens } from '../../theme/tokens'
import type { ProductDrawerContentProps } from '../../types'

const NOT_FOUND_MESSAGE = 'Produto não encontrado'

export const ProductDrawerContent = ({ productId, product, isLoading }: ProductDrawerContentProps) => {
	if (isLoading && productId) {
		return (
			<Box sx={{ display: 'flex', justifyContent: 'center', mt: tokens.drawer.loaderMarginTop }} role="status" aria-label="Carregando detalhes do produto">
				<CircularProgress size={tokens.drawer.loaderSize} color="secondary" />
			</Box>
		)
	}
	if (product) return <ProductDetails product={product} />
	if (productId) return <Typography color="text.secondary">{NOT_FOUND_MESSAGE}</Typography>
	return null
}
