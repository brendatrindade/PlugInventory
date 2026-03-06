import { useSearchParams } from 'react-router-dom'
import { tokens } from '../theme/tokens'
import { useProductsContext } from '../contexts/ProductsContext'

export const useProductPagination = () => {
	const [searchParams, setSearchParams] = useSearchParams()
	const { data } = useProductsContext()
	const page = Number(searchParams.get('page')) || tokens.pagination.defaultPage
	const size = Number(searchParams.get('size')) || tokens.pagination.defaultSize
	const total = data?.total ?? 0
	const pageIndex = page - 1

	function handlePageChange(_event: unknown, newPage: number) {
		setSearchParams((prev) => {
			const next = new URLSearchParams(prev)
			next.set('page', String(newPage + 1))
			return next
		})
	}

	function handleRowsPerPageChange(event: React.ChangeEvent<HTMLInputElement>) {
		const newSize = Number(event.target.value)
		setSearchParams((prev) => {
			const next = new URLSearchParams(prev)
			next.set('size', String(newSize))
			next.set('page', '1')
			return next
		})
	}

	return { page: pageIndex, size, total, handlePageChange, handleRowsPerPageChange }
}
