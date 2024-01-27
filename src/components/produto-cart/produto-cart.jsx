import "./produto-cart.css";
import foto from "../../assets/hamburguer.png";

function ProdutoCart(props){
    return <div className="produto-cart-box">
        <img src={props.foto} alt="foto" />

        <div>
            <p className="produto-cart-nome">{props.nome}</p>
            <p className="produto-cart-valor">{new Intl.NumberFormat('pt-BR', 
                                                    {style: 'currency', currency:"BRL"}).format(props.preco)}</p>

            <div className="footer-produto-cart">
                    <div>
                        <button className="footer-produto-btn">-</button>
                        <span className="footer-produto-qtd">{props.qtd}</span>
                        <button className="footer-produto-btn">+</button>
                    </div>

                    <p className="footer-produto-preco">{new Intl.NumberFormat('pt-BR', 
                                                            {style: 'currency', currency:"BRL"}).format(props.preco * props.qtd)}</p>
            </div>
        </div>
    </div>
}

export default ProdutoCart;