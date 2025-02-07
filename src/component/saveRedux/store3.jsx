import { configureStore,combineReducers } from '@reduxjs/toolkit'
import saveSlice from './saveSlice.jsx'
export const store3 = configureStore({
  reducer:{
    cart:saveSlice
  } 
});