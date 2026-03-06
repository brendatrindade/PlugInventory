import { AppBar, Box, Toolbar } from '@mui/material'
import { AppLogo } from './AppLogo'
import { tokens } from '../../theme/tokens'

export const AppHeader = () => (
	<AppBar position="static" color="transparent" role="banner">
		<Toolbar
			disableGutters
			sx={{
				px: tokens.layout.headerPaddingX,
				minHeight: tokens.layout.headerHeight,
				display: 'flex',
				alignItems: 'center',
				justifyContent: 'space-between',
			}}
		>
			<Box sx={{ display: 'flex', alignItems: 'baseline' }}>
				<AppLogo />
			</Box>
		</Toolbar>
	</AppBar>
)
