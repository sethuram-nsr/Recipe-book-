import {createContext, useReducer} from 'react';


const CartContext = createContext({
    items: [],
    addIem: (item)=>{},
    removeItem: (id)=>{},


});
function cartReducer(state,action){
    if (action.type==='ADD-ITEM'){
        state.items.push(action.item);
    }
    if (action.type==='REMOVE-ITEM'){

    }
    return state;
}

function CartContextProvider({children}){
    useReducer();
    return <CartContext.Provider>{children}</CartContext.Provider>

}
 
export default CartContext;



