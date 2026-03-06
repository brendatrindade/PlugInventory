import { Stack, Typography } from '@mui/material'
import { tokens } from '../../theme/tokens'
import type { DetailFieldProps } from '../../types'

export const DetailField = ({ label, children }: DetailFieldProps) => (
	<Stack spacing={tokens.drawer.detailLabelSpacing}>
		<Typography variant="caption" color="text.secondary">{label}</Typography>
		{children}
	</Stack>
)
