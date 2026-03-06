import { createTheme } from '@mui/material/styles'
import { palette } from './palette'
import { tokens } from './tokens'

export const theme = createTheme({
	palette: {
		mode: 'dark',
		primary: palette.primary,
		secondary: palette.secondary,
		background: palette.background,
		text: palette.text,
		success: palette.success,
		error: palette.error,
	},
	shape: { borderRadius: 10 },

	typography: {
		fontFamily: 'Poppins, Inter, Roboto, sans-serif',
		h4: {
			fontWeight: 600,
			color: palette.text.primary,
			letterSpacing: '0.04em',
		},
		h6: {
			fontWeight: 500,
		},
	},

	components: {
		MuiButtonBase: {
			styleOverrides: {
				root: {
					'&:focus-visible': {
						outline: `2px solid ${palette.secondary.main}`,
						outlineOffset: 2,
					},
				},
			},
		},
		MuiChip: {
			styleOverrides: {
				root: {
					color: palette.text.primary,
					minWidth: 70,
					justifyContent: 'center',
					paddingInline: 2,
				},
			},
		},
		MuiPaper: {
			styleOverrides: {
				root: {
					backgroundColor: palette.background.paper,
					borderRadius: 16,
					boxShadow: '0 22px 60px rgba(15, 23, 42, 0.45)',
				},
			},
		},

		MuiTable: {
			styleOverrides: {
				root: {
					backgroundColor: palette.background.paper,
				},
			},
		},

		MuiTableCell: {
			styleOverrides: {
				root: {
					borderColor: '#cccccc38',
				},
				head: {
					fontWeight: 600,
					color: palette.text.primary,
				},
			},
		},

		MuiTableContainer: {
			styleOverrides: {
				root: {
					borderRadius: tokens.layout.tableRadius,
				},
			},
		},

		MuiTableRow: {
			styleOverrides: {
				root: {
					transition: tokens.animation.hover,
				},
			},
		},

		MuiDrawer: {
			styleOverrides: {
				paper: {
					padding: 32,
					borderRadius: '24px 0 0 24px',
				},
			},
		},

		MuiAppBar: {
			styleOverrides: {
				root: {
					boxShadow: '0 14px 40px rgba(15, 23, 42, 0.75)',
				},
			},
		},

		MuiToolbar: {
			styleOverrides: {
				root: {
					minHeight: 72,
					paddingInline: 32,
					display: 'flex',
					justifyContent: 'space-between',
				},
			},
		},

		MuiOutlinedInput: {
			styleOverrides: {
				root: {
					backgroundColor: 'rgba(15, 23, 42, 0.6)',
				},
				notchedOutline: {
					borderColor: 'rgba(148, 163, 184, 0.35)',
				},
			},
		},
	},
})
