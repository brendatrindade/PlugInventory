import { Box, TextField } from '@mui/material'
import { useProductSearch } from '../../hooks/useProductSearch'
import { useProductsContext } from '../../contexts/ProductsContext'
import { ProductSearchFeedback } from './ProductSearchFeedback'
import { tokens } from '../../theme/tokens'

const SEARCH_LABELS = {
	label: 'Buscar produto',
	helperText: 'Digite o nome do produto ou categoria',
	inputAriaLabel: 'Campo de busca por nome ou categoria',
} as const

export const ProductSearch = () => {
	const { value, handleChange } = useProductSearch()
	const { isFetching, isLoading } = useProductsContext()
	const isFiltering = !isLoading && isFetching

	return (
		<>
			<TextField
				label={SEARCH_LABELS.label}
				data-cy="product-search-input"
				helperText={SEARCH_LABELS.helperText}
				variant="outlined"
				fullWidth
				value={value}
				onChange={handleChange}
				color="secondary"
				aria-label={SEARCH_LABELS.inputAriaLabel}
			/>
			<Box height={tokens.search.feedbackBoxHeight}>
				<ProductSearchFeedback show={isFiltering} />
			</Box>
		</>
	)
}
