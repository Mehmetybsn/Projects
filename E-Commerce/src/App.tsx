import { useEffect, useState } from 'react'
import './App.css'
import RouterConfig from './config/RouterConfig'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Spinner from './components/Spinner'
import Navbar from './components/Navbar'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from './redux/store'
import ProductService from './services/ProductService'
import { ProductType, UserType } from './Types/Types'
import { setCurrentUser, setProducts } from './redux/AppSlice'
import { setBasket } from './redux/BasketSlice'
import BasketDetail from './components/BasketDetail'


function App() {
  
  const { currentUser } = useSelector((state: RootState) => state.app)

  const dispatch = useDispatch()

  const getAllProducts = async () => {
    const products: ProductType[] =await ProductService.getAllProducts()
    dispatch(setProducts(products))
  }

  useEffect(()=> {
    getAllProducts()
  }, [])

  useEffect(()=>{
    const currentUserString: string | null = localStorage.getItem("currentUser")
    if(currentUserString) {
      const currentUser:UserType = JSON.parse(currentUserString) as UserType
      dispatch(setCurrentUser(currentUser))
    }
  },[])

  useEffect(()=>{
    const basketString = localStorage.getItem("basket")
    if(basketString) {
      const basket: ProductType[] = JSON.parse(basketString) as ProductType[]
      dispatch(setBasket(basket))
    }
  },[])

  return (
    <>
    { currentUser && <Navbar /> }
      <RouterConfig />
      <ToastContainer autoClose={2500}/>
      <Spinner />
      <BasketDetail />
    </>
  )
}

export default App
