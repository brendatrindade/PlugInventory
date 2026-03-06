import { Drawer } from '@mui/material'
import { useProductDrawer } from '../../hooks/useProductDrawer'
import { ProductDrawerHeader } from './ProductDrawerHeader'
import { ProductDrawerContent } from './ProductDrawerContent'
import { tokens } from '../../theme/tokens'

export const ProductDrawer = () => {
	const { productId, product, isLoading, handleClose, isOpen } = useProductDrawer()

	return (
		<Drawer
			anchor="right"
			open={isOpen}
			onClose={handleClose}
			data-cy="product-drawer"
			sx={{ '& .MuiDrawer-paper': { width: tokens.drawer.width, p: tokens.drawer.paperPadding } }}
		>
			<ProductDrawerHeader onClose={handleClose} />
			<ProductDrawerContent productId={productId} product={product} isLoading={isLoading} />
		</Drawer>
	)
}
