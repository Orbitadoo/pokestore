import { useState } from "react"
import { useCarritoContext } from "../../context/CartContext"
import { db } from '../../firebase/firebase'
import { collection, writeBatch, query, where, documentId, getDocs, addDoc } from "firebase/firestore"

export const Checkout = () => {
    const [user, setUser] = useState({})
    const [orderId, setOrderId] = useState('')

    

    const { carrito, totalPrice } = useCarritoContext()
    const updateUser = (event) => {
        setUser(user => ({...user,[event.target.name]:event.target.value}))
    }
    
    const createOrder = async(e) => {
        e.preventDefault()
        const order = {
        buyer: user,
        cart: carrito,
        total: totalPrice()
        }

        const batch = writeBatch(db)
        const orderRef = collection(db, 'orders')
        const productosRef = collection(db, "products");

        const q = query(
            productosRef,
            where(
              documentId(),
              "in",
              carrito.map((el) => el.id)
            )
          );

        const productos = await getDocs(q);
        const outOfStock = [];

        productos.docs.forEach((doc) => {
            const item = carrito.find((el) => el.id === doc.id.toString());
      
            if (doc.data().stock >= item.quantity) {
              batch.update(doc.ref, {
                stock: doc.data().stock - item.quantity,
              });
            } else {
              outOfStock.push(item);
            }
          });
      
          if (outOfStock.length === 0) {
            addDoc(orderRef, order).then((doc) => {
              batch.commit();
              setOrderId(doc.id)
            });
          } else {
            alert("Este Pokemon se quedó sin Stock!");
          }
    }

    if (orderId) {
        return (
            <h1>¡Gracias por tu compra! Tu numero de orden es: {orderId}</h1>
        )
    }
    return (
        <>
            <div className="container divForm" >
                <form onSubmit={createOrder}  >
                    <div className="mb-3">
                        <label htmlFor="nombre" className="form-label">Nombre y Apellido</label>
                        <input onChange={updateUser} type="text" className="form-control" name="nombre" required />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="email" className="form-label">Email</label>
                        <input onChange={updateUser} type="email" className="form-control" name="email" />
                    </div>
                    <button type="submit" className="btn btn-primary">Finalizar Compra</button>
                </form>
            </div>
        </>
    )
}