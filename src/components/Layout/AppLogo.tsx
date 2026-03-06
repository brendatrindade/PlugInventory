import { Typography } from '@mui/material'

const BRAND_NAME = 'Pluginventory'

export const AppLogo = () => (
	<Typography
		component="span"
		variant="h6"
		sx={{ fontSize: { xs: 14, sm: 24 }, fontWeight: 700, color: 'primary.main', letterSpacing: '0.16em' }}
		aria-label={BRAND_NAME}
	>
		{BRAND_NAME}
	</Typography>
)
