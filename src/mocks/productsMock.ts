import type { Product } from "../types/product"

export const productsMock: Product[] = [
	{
		id: 1,
		name: 'Notebook Dell Inspiron 15',
		description: 'Notebook Dell Inspiron 15 3000 com Intel Core i5, 8GB RAM, 256GB SSD',
		category: 'Eletrônicos',
		price: 3299.99,
		stock: 15,
		status: 'Ativo',
		created_at: '2024-01-15T10:30:00Z',
	},
	{
		id: 2,
		name: 'Mouse Logitech MX Master 3',
		description: 'Mouse sem fio Logitech MX Master 3 para produtividade',
		category: 'Periféricos',
		price: 599.99,
		stock: 42,
		status: 'Ativo',
		created_at: '2024-01-20T14:15:00Z',
	},
	{
		id: 3,
		name: 'Teclado Mecânico Keychron K2',
		description: 'Teclado mecânico sem fio Keychron K2 com switches Brown',
		category: 'Periféricos',
		price: 899.99,
		stock: 0,
		status: 'Inativo',
		created_at: '2024-01-10T09:00:00Z',
	},
	{
		id: 4,
		name: 'Monitor LG 27" 4K',
		description: 'Monitor LG UltraHD 27 polegadas resolução 4K',
		category: 'Eletrônicos',
		price: 1899.99,
		stock: 12,
		status: 'Ativo',
		created_at: '2024-02-01T11:45:00Z',
	},
	{
		id: 5,
		name: 'Cadeira Gamer ThunderX3',
		description: 'Cadeira gamer ergonômica com ajuste de altura',
		category: 'Móveis',
		price: 1299.99,
		stock: 8,
		status: 'Ativo',
		created_at: '2024-02-05T16:20:00Z',
	},
]

for (let i = 6; i <= 50; i++) {
	const month = ((i - 1) % 12) + 1
	const day = ((i * 2) % 28) + 1
	productsMock.push({
		id: i,
		name: `Produto Exemplo ${i}`,
		description: `Descrição detalhada do Produto Exemplo ${i}`,
		category: i % 2 === 0 ? 'Eletrônicos' : 'Periféricos',
		price: 1000 + i * 25,
		stock: (10 + i * 3) % 100,
		status: i % 5 === 0 ? 'Inativo' : 'Ativo',
		created_at: new Date(2024, month - 1, day, 10, 0, 0).toISOString(),
	})
}