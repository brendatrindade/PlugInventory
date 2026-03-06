import type { ReactNode } from 'react'
import type { Product } from './product'

export interface ProductDetailsProps {
	product: Product
}

export interface ProductDrawerContentProps {
	productId: string | null
	product: Product | undefined
	isLoading: boolean
}

export interface DetailFieldProps {
	label: string
	children: ReactNode
}

export interface ProductDrawerHeaderProps {
	onClose: () => void
}
