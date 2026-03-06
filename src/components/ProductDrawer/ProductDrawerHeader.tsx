import { Box, Typography, IconButton } from '@mui/material'
import { Close } from '@mui/icons-material'
import { tokens } from '../../theme/tokens'
import type { ProductDrawerHeaderProps } from '../../types'

const TITLE = 'Detalhes do produto'
const CLOSE_LABEL = 'Fechar detalhes do produto'

export const ProductDrawerHeader = ({ onClose }: ProductDrawerHeaderProps) => (
	<Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: tokens.drawer.headerMarginBottom }}>
		<Typography variant="h6" fontWeight={600}>{TITLE}</Typography>
		<IconButton onClick={onClose} aria-label={CLOSE_LABEL} size="small">
			<Close />
		</IconButton>
	</Box>
)
