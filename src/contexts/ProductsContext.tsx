import { createContext, useContext, type ReactNode } from 'react'
import { useProducts } from '../hooks/useProducts'

type ProductsContextValue = ReturnType<typeof useProducts>

const ProductsContext = createContext<ProductsContextValue | undefined>(undefined)

ProductsContext.displayName = 'ProductsContext'

type ProductsProviderProps = { children: ReactNode }

export const ProductsProvider = ({ children }: ProductsProviderProps) => {
	const query = useProducts()
	return <ProductsContext.Provider value={query}>{children}</ProductsContext.Provider>
}

export const useProductsContext = (): ProductsContextValue => {
	const context = useContext(ProductsContext)
	if (!context) {
		throw new Error('useProductsContext deve ser utilizado dentro de ProductsProvider')
	}
	return context
}
