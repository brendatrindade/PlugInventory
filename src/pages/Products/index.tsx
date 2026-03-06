import { Container, Stack, Paper } from '@mui/material'
import { ProductSearch } from '../../components/ProductSearch'
import { ProductTable } from '../../components/ProductTable'
import { ProductPagination } from '../../components/ProductPagination'
import { ProductDrawer } from '../../components/ProductDrawer'
import { ProductsProvider } from '../../contexts/ProductsContext'
import { ProductsPageHero } from '../../components/ProductsPageHero'

const ProductsContent = () => (
	<Container maxWidth="lg">
		<Stack spacing={{ xs: 2, md: 4 }} pt={{ xs: 2, md: 4 }}>
			<ProductsPageHero />
			<Paper sx={{ p: 4 }}>
				<Stack spacing={2}>
					<ProductSearch />
					<ProductTable />
					<ProductPagination />
				</Stack>
			</Paper>
			<ProductDrawer />
		</Stack>
	</Container>
)

export const ProductsPage = () => (
	<ProductsProvider>
		<ProductsContent />
	</ProductsProvider>
)
