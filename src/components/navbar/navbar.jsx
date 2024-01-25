import "./navbar.css";
import logo from "../../assets/logo.png";
import bag from "../../assets/bag.png";
import "../../style/global.css";
import Cart from "../cart/cart.jsx";

function Navbar(){

    function openSidebar(){
        const event = new CustomEvent('openSidebar');
        window.dispatchEvent(event);
    }

    return <div className="navbar">
        <img src={logo} className="logotipo" alt="Logotipo"/>

        <div className="menu">
                <a href="#">Histórico</a>
                <button onClick={openSidebar} className="btn btn-red">
                    <img src={bag} className="icon"/>
                    Sacola
                </button>
        </div>

        <Cart/>
    </div>
}

export default Navbar;