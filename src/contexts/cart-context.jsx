import { createContext, useState} from "react";

const CartContext = createContext();

function CartProvider(props){

    const [cartItems, setCartItems] = useState([]);

    return <CartContext.Provider value={{cartItems, setCartItems}}>

    </CartContext.Provider>
}

export {CartContext, CartProvider};