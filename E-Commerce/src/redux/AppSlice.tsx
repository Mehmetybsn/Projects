import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { ProductType, UserType } from '../Types/Types'

export interface appSliceType {
    currentUser: UserType | null,
    loading: boolean,
    drawer: boolean,
    products: ProductType[]
}

const initialState: appSliceType = {
    currentUser: null,
    loading: false,
    drawer: false,
    products: []
}


const appSlice = createSlice({
    name: "app",
    initialState,
    reducers : {
        setLaoding : (state:appSliceType, action: PayloadAction<boolean>) => {
            state.loading = action.payload
        },
        setDrawer: (state:appSliceType, action: PayloadAction<boolean>) => {
            state.drawer = action.payload
        },   
        setCurrentUser : (state:appSliceType, action: PayloadAction<UserType | null>) => {
            state.currentUser = action.payload
        },
        updateBalance: (state:appSliceType, action: PayloadAction<UserType>) => {
            const user: UserType = {
                ...action.payload
            }
            state.currentUser = user
            localStorage.setItem("currentUser", JSON.stringify("state.currentUser"))
        },
        setProducts : (state:appSliceType, action: PayloadAction<ProductType[]>) => {
            state.products = action.payload
        },
        filterProducts : (state: appSliceType, action: PayloadAction<string>) => {
            const tempList: ProductType[] = []
            state.products.map((product: ProductType) => {
                if(product.title.toLowerCase().includes(action.payload.toLowerCase())) {
                    tempList.push(product)
                }
            })
            state.products = [...tempList]
        }
    }

})

export const { setLaoding, setDrawer, setCurrentUser, setProducts, filterProducts, updateBalance } = appSlice.actions

export default appSlice.reducer