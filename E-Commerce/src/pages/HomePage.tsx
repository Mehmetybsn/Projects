import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { ProductType, UserType } from '../Types/Types'
import { setCurrentUser, setLaoding, setProducts } from '../redux/AppSlice'
import ProductService from '../services/ProductService'
import { toast } from 'react-toastify'
import { RootState } from '../redux/store'
import ProductCard from '../components/ProductCard'
import '../css/HomePage.css'
import Category from '../components/Category'
import Container from '@mui/material/Container';

function HomePage() {

  const dispatch = useDispatch()
  const {products} = useSelector((state: RootState) => state.app )

  useEffect(()=>{
    const result = localStorage.getItem("currentUser")
    if(result) {
      const currentUser: UserType = JSON.parse(result) as UserType
      dispatch(setCurrentUser(currentUser))
    }
  }, [])

  const getAllProducts = async () => {
    try {
      dispatch(setLaoding(true))
      const response: ProductType[] = await ProductService.getAllProducts()
      if(response) {
        dispatch(setProducts(response))
      }
    } catch (error) {
        toast.error("Ürünler getirilirken hata oluştu: " + error)
    } finally { 
      dispatch(setLaoding(false))
    }
  }

  useEffect(()=> {
    getAllProducts()
  }, [])

  return (
    <div className='container'>
      <Category />
      <Container maxWidth="xl">
        <div className='products-container'>
          {
            products && products.map((product: ProductType, index: number) => (
              <ProductCard key={index} product={product} />
            ))
          }
        </div>
      </Container>
    </div>
  )
}

export default HomePage