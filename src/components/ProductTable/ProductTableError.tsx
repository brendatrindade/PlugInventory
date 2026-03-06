import { Typography } from '@mui/material'
import { TABLE_LABELS } from './tableLabels'

export const ProductTableError = () => (
	<Typography color="error" align="center" p={4}>
		{TABLE_LABELS.errorMessage}
	</Typography>
)
