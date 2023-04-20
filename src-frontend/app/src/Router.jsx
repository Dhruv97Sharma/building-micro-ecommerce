import CreateProducts from './pages/CreateProducts'
import { Route, Routes } from 'react-router-dom/dist'
import Home from './components/Home'

const Router = () => {
    return (
        <Routes>
            <Route path='/' element={<Home/>}></Route>
            <Route path='/products/create' element={<CreateProducts/>}></Route>
        </Routes>
    )
}

export default Router 