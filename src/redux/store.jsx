import { configureStore } from '@reduxjs/toolkit'
import cartSlice from './cartSlice'
import productSlice from './productSlice'
import apiReducer from './apiSlice';


export const store = configureStore({
  reducer: {
    api: apiReducer,
    cart: cartSlice,
    product: productSlice,
  },
})

export default store