import { Typography, Divider, Stack, Chip } from '@mui/material'
import { formatDate, formatPrice } from '../../utils/formatters'
import { tokens } from '../../theme/tokens'
import { DetailField } from './DetailField'
import type { ProductDetailsProps } from '../../types'

export const ProductDetails = ({ product }: ProductDetailsProps) => (
	<Stack spacing={tokens.drawer.detailSpacing}>
		<DetailField label="ID"><Typography>{product.id}</Typography></DetailField>
		<Divider />
		<DetailField label="Nome"><Typography fontWeight={600}>{product.name}</Typography></DetailField>
		<DetailField label="Descrição"><Typography>{product.description}</Typography></DetailField>
		<Divider />
		<DetailField label="Categoria"><Typography>{product.category}</Typography></DetailField>
		<DetailField label="Preço"><Typography>{formatPrice(product.price)}</Typography></DetailField>
		<DetailField label="Estoque"><Typography>{product.stock}</Typography></DetailField>
		<DetailField label="Status">
			<Chip label={product.status} color={product.status === 'Ativo' ? 'success' : 'default'} variant={product.status === 'Ativo' ? 'filled' : 'outlined'} size="small" />
		</DetailField>
		<Divider />
		<DetailField label="Criado em"><Typography>{formatDate(product.created_at)}</Typography></DetailField>
	</Stack>
)
