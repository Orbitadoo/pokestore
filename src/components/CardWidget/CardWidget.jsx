import '../../scss/_CardWidget.scss'
import cart from "./assets/cart-shopping-solid.svg"
import { useCarritoContext } from '../../context/CartContext'
const CardWidget = ({cantCarrito}) => {
    const {getItemQuantity} = useCarritoContext()
    return (
        <div>
            <img src={cart} alt="Shopping Cart" className='shop-cart'></img>
            {getItemQuantity() > 0 && <span className='cantCarrito'>{getItemQuantity()}</span>}
        </div>
    )
}

export default CardWidget;