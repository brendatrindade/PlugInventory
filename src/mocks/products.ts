import type { Product, PaginatedResponse } from '../types/product'
import { normalizeSearchTerm } from '../utils/formatters'
import { productsMock } from './productsMock'

export const fetchProducts = async (
	page: number = 1,
	size: number = 10,
	search: string = ''
): Promise<PaginatedResponse<Product>> => {
	await new Promise((resolve) => setTimeout(resolve, 500))

	let filtered = [...productsMock]
	if (search) {
		const normalizedSearch = normalizeSearchTerm(search)
		filtered = filtered.filter((product) => {
			const name = normalizeSearchTerm(product.name)
			const category = normalizeSearchTerm(product.category)
			return name.includes(normalizedSearch) || category.includes(normalizedSearch)
		})
	}

	const total = filtered.length
	const start = (page - 1) * size
	const end = start + size
	const paginatedItems = filtered.slice(start, end)
	const pages = Math.ceil(total / size)

	return { items: paginatedItems, page, pages, size, total }
}
