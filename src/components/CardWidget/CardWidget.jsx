import '../../scss/_CardWidget.scss'
import cart from "./assets/cart-shopping-solid.svg"
import { useCarritoContext } from '../../context/CartContext'
import { Link } from 'react-router-dom'
const CardWidget = () => {
    const {getItemQuantity} = useCarritoContext()
    return (
        <div>
            <Link to="/cart">
            <img src={cart} alt="Shopping Cart" className='shop-cart'></img></Link>
            <p>{getItemQuantity()}</p>
        </div>
    )
}

export default CardWidget;