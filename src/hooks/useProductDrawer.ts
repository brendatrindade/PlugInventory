import { useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'
import { useProductsContext } from '../contexts/ProductsContext'

export const useProductDrawer = () => {
	const [searchParams, setSearchParams] = useSearchParams()
	const { data, isLoading } = useProductsContext()
	const productId = searchParams.get('productId')
	const productIdNum = productId ? Number(productId) : undefined
	const product = data?.items.find((p) => p.id === productIdNum)

	const isOpen = Boolean(productId && (isLoading || product?.status === 'Ativo'))

	useEffect(() => {
		if (!isLoading && product?.status === 'Inativo') {
			setSearchParams((prev) => {
				const next = new URLSearchParams(prev)
				next.delete('productId')
				return next
			})
		}
	}, [isLoading, product?.status, setSearchParams])

	function handleClose() {
		setSearchParams((prev) => {
			const next = new URLSearchParams(prev)
			next.delete('productId')
			return next
		})
	}

	return { productId, product, isLoading, handleClose, isOpen }
}
