import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./authSlice";
import cartSlice from "./cartSlice";

const store = configureStore({
    reducer:{
        cart: cartSlice,
        auth: authSlice
    }
})

export default store;