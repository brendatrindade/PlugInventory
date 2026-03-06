export const TRUNCATE_MAX = 40

export const TABLE_LABELS = {
	ariaLabel: 'Tabela de produtos',
	columns: {
		id: 'ID',
		name: 'Nome',
		category: 'Categoria',
		price: 'Preço',
		stock: 'Estoque',
		status: 'Status',
	},
	errorMessage: 'Erro ao carregar produtos',
	emptyMessage: 'Nenhum produto encontrado',
	emptyMessageWithSearch: (truncated: string) => `Nenhum produto encontrado para "${truncated}"`,
} as const
