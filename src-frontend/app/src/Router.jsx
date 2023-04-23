import CreateProducts from './pages/CreateProducts'
import { Route, Routes } from 'react-router-dom/dist'
import Home from './components/Home'
import ProductList from './pages/ProductList'
import ProductDetail from './components/ProductDetail'

const Router = () => {
    return (
        <Routes>
            <Route path='/' element={<Home/>}></Route>
            <Route path='/products/create' element={<CreateProducts/>}></Route>
            <Route path='/products' element={<ProductList/>}></Route>
            <Route path='/product/:productHandle' element={<ProductDetail/>}></Route>
        </Routes>
    )
}

export default Router 