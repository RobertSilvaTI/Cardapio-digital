import "./produto-cart.css";
import foto from "../../assets/hamburguer.png";

function ProdutoCart(){
    return <div className="produto-cart-box">
        <img src={foto} alt="foto" />

        <div>
            <p className="produto-cart-nome">Cheese Burguer</p>
            <p className="produto-cart-valor">R$ 18,90</p>

            <div className="footer-produto-cart">
                    <div>
                        <button className="footer-produto-btn">-</button>
                        <span className="footer-produto-qtd">02</span>
                        <button className="footer-produto-btn">+</button>
                    </div>

                    <p className="footer-produto-preco">R$ 37,80</p>
            </div>
        </div>
    </div>
}

export default ProdutoCart;