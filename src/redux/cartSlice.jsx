import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    products: JSON.parse(localStorage.getItem("cartProducts")) || [],
    totalQuantity: JSON.parse(localStorage.getItem("totalQuantity")) || 0,
    totalPrice: JSON.parse(localStorage.getItem("totalPrice")) || 0,
}


const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers:{
        addtoCart(state, action){
            let newItem = action.payload
            let itemIndex = state.products.find((item)=> item.id === newItem.id)
            if (itemIndex) {
                itemIndex.quantity++
                itemIndex.totalPrice +=  newItem.price
            }else{
                state.products.push({
                    id: newItem.id,
                    title : newItem.title,
                    price: newItem.price,
                    quantity: 1,
                    totalPrice : newItem.price,
                    image: newItem.images
                })
            }
            state.totalPrice += newItem.price;
            state.totalQuantity++
            localStorage.setItem("cartProducts", JSON.stringify(state.products));
            localStorage.setItem("totalQuantity", JSON.stringify(state.totalQuantity));
            localStorage.setItem("totalPrice", JSON.stringify(state.totalPrice));
        },

        incrementQuantity(state,action){
            let id = action.payload
            let findItem = state.products.find((item)=> item.id === id)
            if(findItem){
                findItem.quantity++;
                findItem.totalPrice += findItem.price;
                state.totalQuantity++;
                state.totalPrice += findItem.price
                localStorage.setItem("cartProducts", JSON.stringify(state.products));
                localStorage.setItem("totalQuantity", JSON.stringify(state.totalQuantity));
                localStorage.setItem("totalPrice", JSON.stringify(state.totalPrice));
            }
        },

        decreaseQuantity(state,action){
            let id = action.payload
            let findItem = state.products.find((item)=> item.id === id)
            if(findItem.quantity > 1 ){
                if(findItem){
                    findItem.quantity--;
                    findItem.totalPrice -= findItem.price;
                    state.totalQuantity--;
                    state.totalPrice -= findItem.price;
                    localStorage.setItem("cartProducts", JSON.stringify(state.products));
                    localStorage.setItem("totalQuantity", JSON.stringify(state.totalQuantity));
                    localStorage.setItem("totalPrice", JSON.stringify(state.totalPrice));
                }
            }
        },

        removeCart(state,action){
            let id = action.payload
            let findItem = state.products.find((item) => item.id === id)
            if(findItem){
                state.totalPrice -= findItem.totalPrice;
                state.totalQuantity -= findItem.quantity;
                state.products = state.products.filter(item => item.id !== id);
                localStorage.setItem("cartProducts", JSON.stringify(state.products));
                localStorage.setItem("totalQuantity", JSON.stringify(state.totalQuantity));
                localStorage.setItem("totalPrice", JSON.stringify(state.totalPrice));
            }
        }
    }
})


export const {addtoCart, incrementQuantity, decreaseQuantity, removeCart} = cartSlice.actions;

export default cartSlice.reducer