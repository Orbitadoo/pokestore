import { useCarritoContext } from "../../context/CartContext"
import { Link } from "react-router-dom"
import ItemList from "../ItemList/ItemList"
export const Cart = () => {
    const { carrito, totalPrice, emptyCart } = useCarritoContext()
    
    return (
        <>
            {
                carrito.length === 0 ?
                    <>
                        <h1 className="text-center">Carrito Vacio</h1>
                        <Link to={"/"} className="btn btn-dark d-flex align-items-center text-center justify-context-center">Continuar comprando</Link>
                    </>
                    :
                    <div className="container flex-column flex-wrap">
                    <ItemList products={carrito} />
                        <div className="flex-column flex-wrap gap-3">
                            <p>Resumen de la compra: ${totalPrice()}</p>
                            <button className="btn btn-danger" onClick={() => emptyCart()}>Vaciar Carrito</button>
                            <Link className="nav-link" to={"/"}><button className="btn btn-dark">Continuar Comprando</button></Link>
                            <Link className="nav-link" to={"/checkout"}><button className="btn btn-dark">Finalizar Compra</button></Link>
                        </div>
                    </div>

            }


        </>
    )
}