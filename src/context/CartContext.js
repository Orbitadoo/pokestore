import { useState, createContext, useContext} from "react";

const CarritoContext = createContext()

export const useCarritoContext = () => useContext(CarritoContext);

export const CarritoProvider = (props) => {

    const [carrito, setCarrito] = useState([])
    console.log(carrito)

    const isInCart = (id) => {
        return carrito.some(prod => prod.id === id) // V o F
    }

    const addItem = (item, quantity) => {
        const newObj = {
          ...item,
          quantity,
        };
        if (isInCart(newObj.id)) {
          carrito.map((el) => {
            if (el.id === newObj.id) {
              el.quantity += newObj.quantity;
            }
            return el;
          });
        } else {
          setCarrito([...carrito, newObj]);
        }
      };

    const removeItem = (id) => {
        setCarrito(carrito.filer(prod => prod.id !== id))
    }

    const emptyCart = () => {
        setCarrito([])
    }

    const getItemQuantity = (quantity) => {
        return carrito.reduce((acum, prod) => acum += prod.quantity, 0)
    }

    const totalPrice = () => {
        return carrito.reduce((acum, prod) => acum += (prod.quantity * prod.price), 0)
    }

    return (
        <CarritoContext.Provider value={{carrito, addItem, removeItem, emptyCart, totalPrice, getItemQuantity}}>
            {props.children}
        </CarritoContext.Provider>
    )
}