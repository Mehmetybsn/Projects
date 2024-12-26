import axios, { AxiosResponse } from "axios"
import { ProductType } from "../Types/Types"

class CategoryService {

    BASE_URL = "https://fakestoreapi.com"


    getAllCategory(): Promise<string[]>  {
        return new Promise((resolve:any, reject:any)=> {
            axios.get(`${this.BASE_URL}/products/categories`)
            .then((response: AxiosResponse<any, any>)=>resolve(response.data))
            .catch((error :any)=>reject(error))
        })
    }

    getProductsByCategoryName(categoryName: string): Promise<ProductType[]>  {
        return new Promise((resolve: any, reject: any) => {
            axios.get(`${this.BASE_URL}/products/category/${categoryName}`)
            .then((response: AxiosResponse<any, any>) => resolve(response.data))
            .catch((error: any) => reject(error))
        })
    }
}


export default new CategoryService()