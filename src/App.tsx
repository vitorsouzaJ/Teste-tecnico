import React from 'react'
import Header from './components/layout/Header'
import ProductList from './components/ProductList'
import Footer from './components/layout/Footer'

const App: React.FC = () => {
  return (
    <div>
      <Header />
      <ProductList />
      <Footer />
    </div>
  )
}

export default App
