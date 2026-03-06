import { Box, Typography } from '@mui/material'
import { tokens } from '../../theme/tokens'

const OVERLINE = 'CONTROLE DA SUA TI'
const TITLE = 'Catálogo da operação'
const SUBTITLE = 'Estoques, ativos e status de produtos em tempo real'

export const ProductsPageHero = () => (
	<Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
		<Box>
			<Typography
				variant="overline"
				sx={{
					fontSize: tokens.hero.overlineFontSize,
					color: 'primary.main',
					letterSpacing: '0.24em',
					fontWeight: 200,
					opacity: 0.8,
				}}
			>
				{OVERLINE}
			</Typography>
			<Typography
				variant="h3"
				sx={{
					fontSize: tokens.hero.titleFontSize,
					mt: 1.5,
					fontWeight: 700,
				}}
			>
				{TITLE}
			</Typography>
			<Typography
				variant="body2"
				sx={{
					fontSize: tokens.hero.subtitleFontSize,
					mt: 1.5,
					maxWidth: tokens.hero.subtitleMaxWidth,
					color: 'text.secondary',
				}}
			>
				{SUBTITLE}
			</Typography>
		</Box>
	</Box>
)
