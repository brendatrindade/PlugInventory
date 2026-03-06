import { Box, CircularProgress } from '@mui/material'
import { tokens } from '../../theme/tokens'
import type { ProductSearchFeedbackProps } from '../../types'

export const ProductSearchFeedback = ({ show }: ProductSearchFeedbackProps) => {
	if (!show) return null
	return (
		<Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }} role="status" aria-live="polite" aria-label="Buscando produtos">
			<CircularProgress size={tokens.search.feedbackSpinnerSize} color="secondary" aria-hidden />
		</Box>
	)
}
