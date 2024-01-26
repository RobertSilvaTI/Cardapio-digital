import { useEffect, useState } from "react";
import { Dock } from "react-dock";
import ProdutoCart from "../produto-cart/produto-cart.jsx";
import "./cart.css";
import { useNavigate } from "react-router-dom";

function Cart(){

    const [show, setShow] = useState(false);
    const navigate = useNavigate();

    useEffect(function(){
        window.addEventListener('openSidebar', function(){
            setShow(true);
        });
    }, []);

    function ckeckout(){
        navigate("/checkout");
    }

    return <Dock position="right" isVisible={show} fluid={false} size={420}
                 onVisibleChange={function(visible){
                    setShow(visible);
                 }}
            >
        <div className="text-center">
            <h1>Meu Pedido</h1>
        </div>

        <div className="lista-produtos">
            <ProdutoCart/>
            <ProdutoCart/>
        </div>

        <div className="footer-cart"> 
            <div className="footer-cart-valor">
                <span><strong>Total</strong></span>
                <span><strong>R$ 50,00</strong></span>
            </div>
            <div>
                <button onClick={ckeckout} className="btn-checkout">Finalizar Pedido</button>
            </div>
        </div>
    </Dock>
}

export default Cart;