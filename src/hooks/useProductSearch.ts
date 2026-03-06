import { useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { normalizeSearchTerm } from '../utils/formatters'

export const useProductSearch = () => {
	const [searchParams, setSearchParams] = useSearchParams()
	const searchParam = searchParams.get('search') ?? ''
	const [value, setValue] = useState(searchParam)

	function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
		const rawValue = e.target.value
		setValue(rawValue)
		const normalizedValue = normalizeSearchTerm(rawValue)
		setSearchParams((prev) => {
			const params = new URLSearchParams(prev)
			if (normalizedValue) {
				params.set('search', normalizedValue)
			} else {
				params.delete('search')
			}
			params.set('page', '1')
			return params
		})
	}

	return { value, handleChange }
}
