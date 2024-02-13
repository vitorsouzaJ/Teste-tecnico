import { Route, Routes } from 'react-router-dom'
import ProductList from '@src/components/ProductList'

const DefaultRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<ProductList />} />
    </Routes>
  )
}

export default DefaultRouter
