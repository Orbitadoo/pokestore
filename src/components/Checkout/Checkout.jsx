import { useRef, useState } from "react"
import { useCarritoContext } from "../../context/CartContext"
import { Link, useNavigate } from "react-router-dom"
import { db } from '../../firebase/firebase'
import { collection, writeBatch, query, where, documentId, getDocs, addDoc } from "firebase/firestore"

export const Checkout = () => {
    const [user, setUser] = useState({})

    const datForm = useRef()
    const { carrito, totalPrice } = useCarritoContext()
    const updateUser = (event) => {
        setUser(user => ({...user,[event.target.name]:event.target.value}))
    }
    
    const createOrder = async() => {
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
            const item = carrito.find((el) => el.id === doc.id);
      
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
              console.log(doc.id);
            });
          } else {
            alert("Este Pokemon se quedó sin Stock!");
          }
    }


    let navigate = useNavigate()
    return (
        <>
            {
                carrito.length === 0 ?
                    <>
                        <h2>¡No seleccionaste nada del carrito!</h2>
                        <Link className="nav-link" to={"/"}><button className="btn btn-primary">Continuar comprando</button></Link>
                    </>
                    :
                    <div className="container divForm" >
                        <form onSubmit={createOrder} ref={datForm}>
                            <div className="mb-3">
                                <label htmlFor="nombre" className="form-label">Nombre y Apellido</label>
                                <input onChange={updateUser} type="text" className="form-control" name="nombre" required />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="email" className="form-label">Email</label>
                                <input onChange={updateUser} type="email" className="form-control" name="email" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="email" className="form-label">Repetir Email</label>
                                <input onChange={updateUser} type="email" className="form-control" name="emailRepetido" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="celular" className="form-label">Numero telefonico</label>
                                <input onChange={updateUser} type="number" className="form-control" name="celular" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="direccion" className="form-label">Direccion</label>
                                <input onChange={updateUser} type="text" className="form-control" name="direccion" />
                            </div>
                            <button type="submit" className="btn btn-primary">Finalizar Compra</button>
                        </form>
                    </div>

            }

        </>

    )
}