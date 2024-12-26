import React from 'react'
import {BrowserRouter , Routes , Route} from 'react-router-dom'
import HomePage from '../pages/HomePage'
import LoginPage from '../pages/LoginPage'
import RegisterPage from '../pages/RegisterPage'
import ProductsDeatils from '../pages/ProductsDeatils'

function RouterConfig() {
  return (
    <div>
        
        <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/login' element={<LoginPage />} />
            <Route path='/register' element={<RegisterPage />} />
            <Route path='/product-detail/:productId' element={<ProductsDeatils />} />
        </Routes>

    </div>
  )
}

export default RouterConfig