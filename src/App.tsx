import { Routes, Route, Navigate } from 'react-router-dom'
import { ProductsPage } from './pages/Products'
import { AppLayout } from './components/Layout'

function App() {
	return (
		<AppLayout>
			<Routes>
				<Route path="*" element={<Navigate to="/products" />} />
				<Route path="/products" element={<ProductsPage />} />
			</Routes>
		</AppLayout>
	)
}

export default App
