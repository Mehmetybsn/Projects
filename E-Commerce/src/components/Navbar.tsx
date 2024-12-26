import React from 'react'
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MagaraIcon from '../images/magara.png'
import { useNavigate } from 'react-router-dom';
import { TextField } from '@mui/material';
import InputAdornment from '@mui/material/InputAdornment';
import { useDispatch, useSelector } from 'react-redux';
import { filterProducts, setCurrentUser, setDrawer, setProducts } from '../redux/AppSlice';
import { toast } from 'react-toastify';
import ProductService from '../services/ProductService';
import { ProductType } from '../Types/Types';
import { CiShoppingBasket } from "react-icons/ci";
import Badge from '@mui/material/Badge';
import { RootState } from '../redux/store';

function Navbar() {

    const navigate = useNavigate()
    const dispatch = useDispatch()

    const {basket} = useSelector((state:RootState)=> state.basket)

    const logout = ()=> {
        localStorage.removeItem("currentUser")
        dispatch(setCurrentUser(null))
        navigate("/login")
        toast.success("Çıkış yapılıyor")
    }

    const handleFilter = async (e: React.ChangeEvent<HTMLInputElement>) => {
      try {
        if(e.target.value) {
          dispatch(filterProducts(e.target.value))
        } else {
          const products: ProductType[] =await ProductService.getAllProducts()
          dispatch(setProducts(products))
        }
      } catch (error) {
        toast.error("filtreleme yaparken hata oluştu: " + error)
      }
    }

    const openDrawer = () => {
      dispatch(setDrawer(true))
    }

  return (
    <div>
        <AppBar position="static" sx={{backgroundColor: "#454242"}}>
        <Toolbar>
          <IconButton
          onClick={()=>navigate("/")}
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <img src={MagaraIcon} width="60px" height="60px" />
          </IconButton>
          <Typography onClick={()=>navigate("/")} variant="h6" component="div" sx={{ flexGrow: 1, cursor:"pointer" }}>
            Mağara  Store
          </Typography>
          <TextField
            onChange={(e: React.ChangeEvent<HTMLInputElement>)=> handleFilter(e)}
            sx={{ width:"300px", marginBottom:"20px", marginRight:"15px"}}
            id="searchInput"
            placeholder="Aradığınız ürünü yazınız"
            
            slotProps={{
              input: {
                startAdornment: (
                  <InputAdornment position="start">
                    
                  </InputAdornment>
                ),
                style: {
                    color: "lightgray",
                    borderBottom: "1px solid lightgray"
                }
              },
            }}
            variant="standard"
            />
          <Badge onClick = {openDrawer} badgeContent={basket.length} color='warning' sx={{margin:"0 10px", cursor:"pointer"}}>
            <CiShoppingBasket style={{fontSize:"18px", cursor:"pointer"}} />
          </Badge>
          <Button onClick={logout} sx={{color:"lightgray"}} >Çıkış Yap</Button>
        </Toolbar>
      </AppBar>
    </div>
  )
}

export default Navbar