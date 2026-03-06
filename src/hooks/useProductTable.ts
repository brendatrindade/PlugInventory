import { useSearchParams } from 'react-router-dom'
import { useProductsContext } from '../contexts/ProductsContext'
import { truncateSearchTerm } from '../utils/formatters'
import { TABLE_LABELS, TRUNCATE_MAX } from '../components/ProductTable/tableLabels'

export const useProductTable = () => {
	const [searchParams] = useSearchParams()
	const { data, isLoading, isError } = useProductsContext()
	const search = searchParams.get('search') ?? ''
	const truncated = truncateSearchTerm(search, TRUNCATE_MAX)
	const emptyMessage = search ? TABLE_LABELS.emptyMessageWithSearch(truncated) : TABLE_LABELS.emptyMessage
	return { data, isLoading, isError, emptyMessage }
}
