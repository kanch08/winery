import {
    ADD_TO_CART,
    REMOVE_ITEM,
    SUB_QUANTITY,
    ADD_QUANTITY,
    CLEAR_CART,
    FORM_DATA,
    CHANGE_CART_COLOR,
    CHANGE_CART_SIZE,
    ADD_AMOUNT,
    ADD_TO_WISHLIST,
} from "./actionTypes/cartActions";

export const addToCart= (data)=>{
    return{
        type: ADD_TO_CART,
        data
    }
}
//remove item action
export const removeItem=(id)=>{
    return{
        type: REMOVE_ITEM,
        id
    }
}
//subtract qt action
export const subQuantity=(id)=>{
    return{
        type: SUB_QUANTITY,
        id
    }
}
//add qt action
export const addQuantity=(id)=>{
    return{
        type: ADD_QUANTITY,
        id
    }
}
export const clearCart = (data) => ({
    type : CLEAR_CART,
})

export const formData =(data)=>({
    type:FORM_DATA,
    data
})

export const changeCartColor=(data)=>({
    type:CHANGE_CART_COLOR,
    data
})

export const changeCartSize=(data)=>({
    type:CHANGE_CART_SIZE,
    data
})

export const addAmount = (data) =>({
    type:ADD_AMOUNT,
    data
})

export const addToWishlist=(data)=>({
    type:ADD_TO_WISHLIST,
    data
})