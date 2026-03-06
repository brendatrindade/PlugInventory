export const PAGINATION_LABELS = {
	rowsPerPage: 'Itens por página:',
	next: 'Ir para a próxima página',
	previous: 'Ir para a página anterior',
	first: 'Ir para a primeira página',
	last: 'Ir para a última página',
} as const

export const formatDisplayedRows = ({ from, to, count }: { from: number; to: number; count: number }) =>
	count === -1 ? `${from}-${to} de mais de ${to}` : `${from}-${to} de ${count}`

export const getItemAriaLabel = (type: string): string =>
	({ first: PAGINATION_LABELS.first, last: PAGINATION_LABELS.last, next: PAGINATION_LABELS.next, previous: PAGINATION_LABELS.previous }[type] ?? '')
