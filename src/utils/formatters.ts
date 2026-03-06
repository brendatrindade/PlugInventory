/**
 * Formata valor numérico como moeda BRL (pt-BR).
 */
export const formatPrice = (value: number): string => {
	return new Intl.NumberFormat('pt-BR', {
		style: 'currency',
		currency: 'BRL',
	}).format(value)
}

/**
 * Formata string de data em formato curto pt-BR (data + hora).
 */
export const formatDate = (date: string): string => {
	return new Intl.DateTimeFormat('pt-BR', {
		dateStyle: 'short',
		timeStyle: 'short',
	}).format(new Date(date))
}

/**
 * Normaliza termo de busca: minúsculas, trim, colapsa espaços múltiplos.
 */
export const normalizeSearchTerm = (value: string): string =>
	value
		.toLowerCase()
		.trim()
		.replace(/\s+/g, ' ')

/**
 * Trunca string com reticências quando excede maxLength.
 */
export const truncateSearchTerm = (search: string, maxLength: number): string => {
	if (!search) return ''
	return search.length > maxLength ? `${search.slice(0, maxLength)}...` : search
}
