import { createContext, useContext, useState} from "react";

const CartContext = createContext();

function CartProvider(props){

    const [cartItems, setCartItems] = useState([]);
    const [totalCart, setTotalCart] = useState(0);

    function AddItemCart(item){

        let cartItemsNovo = [];
        let findItem = false;

        //Verifica se produto já existe no carrinho
        for (var prod of cartItems){

            //Se encontrar o produto no carrinho
            if (prod.id == item.id){
                item.qtd = prod.qtd + 1;
                findItem = true;
                cartItemsNovo.push(item);
            }else{
                cartItemsNovo.push(prod);
            }
        }

        //Se não encontrar o produto no carrinho ou for o primeiro item a ser inserido no carrinho
        if ((findItem == false) || (cartItems.length == 0)){
            cartItemsNovo.push(item);
        }

        //Insere o item no carrinho
        setCartItems(cartItemsNovo);
        CalcTotal(cartItemsNovo);
    }

    function RemoveItemCart(id){
        let cartItemsNovo = [];

        //Localiza o item no carrinho
        for (var prod of cartItems){

            //Localizou
            if (prod.id == id){
                prod.qtd = prod.qtd - 1
            }

            cartItemsNovo.push(prod);
        }

        //Remove itens com qtd zerada
        cartItemsNovo = cartItemsNovo.filter(function(item){
            return item.qtd > 0
        });

        //Atualiza qtd do produto no carrinho
        setCartItems(cartItemsNovo);
        CalcTotal(cartItemsNovo);
    }

    function CalcTotal(items){
        let tot = 0;

        for (var item of items){
            tot = tot + (item.qtd * item.preco);
        }

        setTotalCart(tot);
    }

    return <CartContext.Provider value={{cartItems, setCartItems, AddItemCart, RemoveItemCart, totalCart}}>
        {props.children}
    </CartContext.Provider>
}

export {CartContext, CartProvider};