import  React, { useEffect, useState } from 'react';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import CategoryService from '../services/CategoryService';
import { useDispatch } from 'react-redux';
import { setLaoding, setProducts } from '../redux/AppSlice';
import { toast } from 'react-toastify';
import ProductService from '../services/ProductService';
import { ProductType } from '../Types/Types';
import { string } from 'yup';


function Category() {

  const dispatch = useDispatch()
  const [categories, setCategories] = useState<string[]>()

  const getAllCategories = async () => {
    try {
      dispatch(setLaoding(true))
      const categories: string[] = await CategoryService.getAllCategory()
      setCategories(categories)
    } catch (error) {
      toast.error("Kategori listesi alınırken hata oluştu: " + error)
    } finally {
      dispatch(setLaoding(false))
    }
  }

  const handleCategory = async (e: React.ChangeEvent<HTMLInputElement>, categoryName: string) => {
    try {
      dispatch(setLaoding(true))
      if(e.target.checked) {
        const products: ProductType[] = await CategoryService.getProductsByCategoryName(categoryName)
        dispatch(setProducts(products))
      } else {
        const products: ProductType[] =await ProductService.getAllProducts()
        dispatch(setProducts(products))
      }
    } catch (error) {
      toast.error("Kategoriler alınırken hata oluştu:" + error)
    } finally{
      dispatch(setLaoding(false))
    }
  } 

  useEffect(()=> {
    getAllCategories()
  }, [])

  return (
    <div style={{marginTop:"60px", marginLeft:"20px"}}>
      <FormGroup>
        {
          categories && categories.map((category: string, index: number)=> (
            <FormControlLabel key={index} control={
            <Checkbox onChange={(e: React.ChangeEvent<HTMLInputElement>)=> handleCategory(e,category)} />
          } label= {category} />
          ))
        }
      </FormGroup>
            
        
    </div>
  )
}

export default Category