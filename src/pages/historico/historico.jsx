import Navbar from "../../components/navbar/navbar.jsx";
import "./historico.css";
import "../../style/global.css";

function Historico(){

    const pedidos = [
        {id_pedido: 541561, dt: "14/01/2024", total: 150.30},
        {id_pedido: 841562, dt: "15/01/2024", total: 99},
        {id_pedido: 887453, dt: "18/01/2024", total: 119.90},
        {id_pedido: 985417, dt: "19/01/2024", total: 37.20},
        {id_pedido: 995411, dt: "19/01/2024", total: 49.90},
        {id_pedido: 985852, dt: "19/01/2024", total: 78.80},
        {id_pedido: 998524, dt: "19/01/2024", total: 50.00}
    ]

    return <>
        <div>
            <Navbar showMenu={true}/>

            <div className="container">
                <div className="titulo text-center">
                    <h1>Histórico de Pedidos</h1>
                </div>
            </div>

            <div className="box-pedido">
                <table className="table">
                    <tr>
                        <td><strong>Pedido 5243</strong></td>
                        <td className="text-light">26/01/2024</td>
                        <td className="text-red">R$ 36,00</td>
                    </tr>

                    <tr>
                        <td><strong>Pedido 5150</strong></td>
                        <td className="text-light">15/01/2024</td>
                        <td className="text-red">R$ 45,00</td>
                    </tr>

                    <tr>
                        <td><strong>Pedido 4990</strong></td>
                        <td className="text-light">20/12/2023</td>
                        <td className="text-red">R$ 78,90</td>
                    </tr>
                </table>
            </div>
        </div>
    </>
}

export default Historico;