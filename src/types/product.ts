/** Status de exibição do produto na tabela */
export type ProductStatus = 'Ativo' | 'Inativo'

/** Modelo de produto retornado pela API / mocks */
export interface Product {
	id: number
	name: string
	description: string
	category: string
	price: number
	stock: number
	status: ProductStatus
	created_at: string
}

/** Resposta paginada genérica da API */
export interface PaginatedResponse<T> {
	items: T[]
	page: number
	pages: number
	size: number
	total: number
}
