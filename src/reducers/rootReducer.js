import {combineReducers} from 'redux';
import data from '../components/data';
import {
    ADD_TO_CART,
    REMOVE_ITEM,
    SUB_QUANTITY,
    ADD_QUANTITY,
    CHANGE_CART_SIZE,
    CHANGE_CART_COLOR,
    CLEAR_CART,
    FORM_DATA,
    ADD_TO_WISHLIST
} from "../components/actions/actionTypes/cartActions";

const initState = data;
const reducer = (state = initState ,action) => {
    switch(action.type){
        case "onChange":{
            return {state}
        }
        default : {
            return state;
        }
    }
}

const formReducer=(state={},action)=>{
    if(action.type===FORM_DATA){
        return{...action.data}
    }
    else
        return state;

}

const wishlistReducer= (state=initState,action)=>{

    //ADDING ITEMS TO WISHLIST
    if(action.type===ADD_TO_WISHLIST){
        let addedWishlistItem=action.data;
        return{
            ...state,
            wishlistItems: [...state.wishlistItems, addedWishlistItem],

        }
    }
    return state;
}

const cartReducer= (state = initState,action)=>{

    //INSIDE HOME COMPONENT
    if(action.type === ADD_TO_CART){
         let addedItem = state.addedItems.find(item=> item.id === action.data.id);

        //check if the action id exists in the addedItems

        let existed_item= state.addedItems.find(item=> action.data.id === item.id);
        if(existed_item)
        {  console.log('inside existed item if block')
            addedItem.quantity += 1
            return{
                ...state,
                addedItem:[...state.addedItems, addedItem],
                total: state.total + addedItem.price
            }
        }
        else{
            let addedItem = action.data;
            addedItem.quantity = 1;
            //calculating the total
            let newTotal = state.total + addedItem.price

            return{
                ...state,
                addedItems: [...state.addedItems, addedItem],
                total : newTotal
            }

        }
    }

    if(action.type === REMOVE_ITEM){
        let itemToRemove= state.addedItems.find(item=> action.id === item.id)
        let new_items = state.addedItems.filter(item=> action.id !== item.id)

        //calculating the total
        let newTotal = state.total - (itemToRemove.price * itemToRemove.quantity )
        console.log(itemToRemove);
        return{
            ...state,
            addedItems: new_items,
            total: newTotal
        }
    }
    //INSIDE CART COMPONENT
    if(action.type === ADD_QUANTITY){
        console.log('printing action',action);
        let addedItem = state.addedItems.find(item=> item.id === action.id)
        addedItem.quantity += 1
        let newTotal = state.total + addedItem.price
        return{
            ...state,
            // addedItems: [...state.addedItems, addedItem],
            total: newTotal
        }
    }
    if(action.type=== SUB_QUANTITY){
        let addedItem = state.addedItems.find(item=> item.id === action.id)
        //if the qt == 0 then it should be removed
        if(addedItem.quantity === 1){
            let new_items = state.addedItems.filter(item=>item.id !== action.id)
            let newTotal = state.total - addedItem.price
            return{
                ...state,
                addedItems: new_items,
                total: newTotal
            }
        }
        else {
            addedItem.quantity -= 1
            let newTotal = state.total - addedItem.price
            return{
                ...state,
                total: newTotal
            }
        }

    }
   if(action.type===CLEAR_CART) {
        return {
            ...state,
            addedItems: []
        };
    }

   if(action.type===CHANGE_CART_COLOR){
       let findItem = state.addedItems.find(item => item.id === action.data.id);
       findItem.color= action.data.color;
       let updatedItems = state.addedItems.map(item =>{
           if(item.id === action.data.id){
               return findItem;
           }
           return item;
       })

       return{
           ...state,
           addedItems:updatedItems
       }


   }
    if(action.type===CHANGE_CART_SIZE){
        return{
            ...state,
            size:action.data,
        }


    }

    return state
}




const amountReducer = (state={}, action) => {
    switch (action.type) {
        case 'ADD_AMOUNT':{
            return {
                ...state,
                amount:action.data,
            }

        }
        default:{
            return state;
        }

    }
}



export const rootReducer = combineReducers({
    reducer,
    cartReducer,
    formReducer,
    amountReducer,
    wishlistReducer
})