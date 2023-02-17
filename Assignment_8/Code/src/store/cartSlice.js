import { createSlice } from "@reduxjs/toolkit";

const initialState= {
    cart: []
}

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addItemToCart: (state, action) =>{
            state.cart.push(action.payload);
        },
        removeItemsFromCart:(state, action)=>{
            state.cart = state.cart.filter((item) => item.id !== action.payload); 
        }
    }

});

export default cartSlice.reducer;
export const {addItemToCart, removeItemsFromCart} = cartSlice.actions;