import { productsSelectors } from './products.selectors'

describe('Products Page', () => {
	beforeEach(() => {
		cy.visit('/products')
		cy.url().should('include', '/products')
	})

	it('deve carregar a listagem com paginação na tabela', () => {
		cy.get(productsSelectors.searchInput, { timeout: 5000 }).should('be.visible')

		cy.get(productsSelectors.productsTable, { timeout: 5000 }).within(() => {
			cy.get('tbody tr').should('have.length.greaterThan', 0)
		})
	})

	it('deve filtrar produtos pela busca e atualizar a URL', () => {
		cy.get(productsSelectors.searchInput, { timeout: 5000 }).should('be.visible').type('mouse')

		cy.url().should('include', 'search=mouse')

		cy.get(productsSelectors.productsTable).within(() => {
			cy.get('tbody tr').first().should('contain.text', 'Mouse')
		})
	})

	it('deve abrir o drawer ao clicar em um produto ativo', () => {
		cy.get(productsSelectors.productsTable, { timeout: 5000 })
			.should('be.visible')
			.within(() => {
				cy.get('tbody tr').should('have.length.greaterThan', 0)
			})

		cy.get(productsSelectors.productStatusChip, { timeout: 5000 })
			.contains('Ativo')
			.closest(productsSelectors.productRow)
			.first()
			.click()
		cy.get(productsSelectors.productDrawerTitle, { timeout: 5000 }).should('be.visible')
	})

	it('deve impedir abertura do drawer ao clicar em um produto inativo', () => {
		cy.get(productsSelectors.productsTable, { timeout: 5000 })
			.should('be.visible')
			.within(() => {
				cy.get('tbody tr').should('have.length.greaterThan', 0)
			})

		cy.get(productsSelectors.productStatusChip, { timeout: 5000 })
			.contains('Inativo')
			.closest(productsSelectors.productRow)
			.first()
			.click()

		cy.get(productsSelectors.productDrawerTitle).should('not.exist')
	})
})
