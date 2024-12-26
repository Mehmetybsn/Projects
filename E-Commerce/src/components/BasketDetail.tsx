import React, { useEffect } from 'react'
import Drawer from '@mui/material/Drawer';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../redux/store';
import { setDrawer, updateBalance } from '../redux/AppSlice';
import { ProductType, UserType } from '../Types/Types';
import { Button } from '@mui/material';
import { calculateBasket, removeProductFromBasket, setBasket } from '../redux/BasketSlice';
import { toast } from 'react-toastify';

function BasketDetail() {

    const { drawer, currentUser } = useSelector((state:RootState)=>state.app)

    const {basket, totalAmount} = useSelector((state:RootState)=> state.basket)

    const dispatch = useDispatch()

    useEffect(()=> {
        dispatch(calculateBasket())
    },[basket])

    const closeDrawer = () => {
        dispatch(setDrawer(false))
    }

    const removeProduct = (productId: number) => {
        dispatch(removeProductFromBasket(productId))
    }

    const buy = () => {
        if(currentUser?.balance&& currentUser.balance < totalAmount) {
            toast.warn("Bakiyeniz yeterli değildir")
        } else {
            if(currentUser?.balance) {
                const remaningTotal = currentUser.balance  - totalAmount
                const payload: UserType = {
                    ...currentUser,
                    balance: remaningTotal
                }
                dispatch(updateBalance(payload))
                dispatch(setBasket([]))
                localStorage.removeItem("basket")
                toast.success("Ürünler satın alınmıştır")
            }
            
           
        }
    }
  return (
    <div>
        <Drawer open={drawer} anchor='right' onClose={closeDrawer}> 
            {
                basket && basket.map((product: ProductType)=> (
                    
                        <div className='basket-container'>
                            <div className='img-container'>
                                <img src={product.image} width={60} height={60}  />
                            </div>
                            <div className='desc-container'>
                                <h1> {product.title.substring(0, 30)} </h1>
                                <h2> {product.description.substring(0,40)} </h2>
                            </div>
                            <div className='count'>
                                {product.count}
                            </div>
                            <div className='price'>
                                {product.price}₺
                            </div>
                            <div>
                                <Button onClick={()=>removeProduct(product.id)} size='small' variant='outlined' sx={{height:"25px"}}>Çıkar</Button>
                            </div>
                        </div>

                ))
            }
            <div className='amount'>
                <h2>Toplam tutar: {totalAmount}₺ </h2>
                <div>
                    <Button onClick={buy} size='small' variant='contained' color='success' sx={{height:"25px", marginTop:"20px"}}>Satın Al</Button>
                </div>
            </div>
        </Drawer>
    </div>
  )
}

export default BasketDetail