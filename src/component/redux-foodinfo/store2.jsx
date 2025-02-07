import { configureStore } from '@reduxjs/toolkit'
import cartSlice from './cartSlice.jsx'
export const store2 = configureStore({
  reducer:{
    cart:cartSlice
  } 
})
