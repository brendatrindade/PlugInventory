import { useQuery } from '@tanstack/react-query'
import { useSearchParams } from 'react-router-dom'
import { fetchProducts } from '../mocks/products'
import type { PaginatedResponse, Product } from '../types/product'
import { normalizeSearchTerm } from '../utils/formatters'
import { useDebounce } from './useDebounce'

export const useProducts = () => {
	const [searchParams] = useSearchParams()
	const page = Number(searchParams.get('page')) || 1
	const size = Number(searchParams.get('size')) || 10
	const rawSearch = searchParams.get('search') ?? ''
	const search = normalizeSearchTerm(rawSearch)
	const debouncedSearch = useDebounce(search, 500)

	return useQuery<PaginatedResponse<Product>>({
		queryKey: ['products', page, size, debouncedSearch],
		queryFn: () => fetchProducts(page, size, debouncedSearch),
		placeholderData: (previousData) => previousData,
	})
}
