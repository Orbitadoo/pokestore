import '../../scss/_CardWidget.scss'
import cart from "./assets/cart-shopping-solid.svg"

const CardWidget = () => {
    return (
        <div>
            <img src={cart} alt="Shopping Cart"></img>
            <p>0</p>
        </div>
    )
}

export default CardWidget;