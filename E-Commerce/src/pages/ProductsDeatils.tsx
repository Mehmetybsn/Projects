import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Container from '@mui/material/Container';
import { useDispatch } from 'react-redux';
import { setLaoding } from '../redux/AppSlice';
import { toast } from 'react-toastify';
import ProductService from '../services/ProductService';
import { ProductType } from '../Types/Types';
import '../css/ProductDetails.css'
import { Button } from '@mui/material';
import { addProductToBasket } from '../redux/BasketSlice';

function ProductsDeatils() {

    const {productId} = useParams()
    const dispatch = useDispatch()

    const [count, setCount] = useState<number>(0)

    const [product, setProduct] = useState<ProductType>()

    const getProductById = async (productId :number) => {
        try {
            dispatch(setLaoding(true))
            const product = await ProductService.getProductById(productId)
            setProduct(product)
        } catch (error) {
            toast.error("Ürün getirilirken hata oluştu: " + error)
        } finally {
            dispatch(setLaoding(false))
        }
    }
    
    const addBasket = () => {
        if(product) {
            const payload: ProductType = {
                ...product,
                count: count
            }
            dispatch(addProductToBasket(payload))
            toast.success("Ürün sepete eklendi")
        }
        
    }


    useEffect(()=>{
        getProductById(Number(productId))
    },[])

  return (
    <Container maxWidth="lg">
        {product &&
        <div className='product-container'>
            <div>
                <img className='product-details' src={product.image} />
            </div>
            <div className='title-container'>
                <h2> {product.title} </h2>
                <p> {product.description} </p>
                <h1> {product.price}₺ </h1>
                <div style={{marginTop:"20px"}}>
                    <span onClick={()=>setCount(count + 1)} className='plus'> + </span>
                    <span className='count'> {count} </span>
                    <span onClick={()=>setCount(count - 1)} className='minus'> - </span>
                </div>
                <div>
                    <Button onClick={addBasket} color='info' variant='contained' size='small' sx={{marginTop:"20px"}}>Sepete Ekle</Button>
                </div>
            </div>
        </div>
        }
    </Container>
  )
}

export default ProductsDeatils