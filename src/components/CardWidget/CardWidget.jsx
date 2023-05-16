import '../../scss/_CardWidget.scss'
import cart from "./assets/cart-shopping-solid.svg"
import { useCarritoContext } from '../../context/CartContext'
const CardWidget = () => {
    const {getItemQuantity} = useCarritoContext()
    return (
        <div>
            <img src={cart} alt="Shopping Cart" className='shop-cart'></img>
            <p>{getItemQuantity()}</p>
        </div>
    )
}

export default CardWidget;