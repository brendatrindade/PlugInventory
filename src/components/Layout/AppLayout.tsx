import { Box } from '@mui/material'
import { AppHeader } from './AppHeader'
import { tokens } from '../../theme/tokens'
import type { AppLayoutProps } from '../../types'

export const AppLayout = ({ children }: AppLayoutProps) => (
	<Box
		sx={{
			minHeight: '100vh',
			minWidth: `${tokens.layout.minViewportWidth}px`,
			bgcolor: 'background.default',
			display: 'flex',
			flexDirection: 'column',
		}}
	>
		<AppHeader />
		<Box component="main" sx={{ flex: 1, py: tokens.layout.mainPaddingY, bgcolor: 'background.default' }}>
			{children}
		</Box>
	</Box>
)
