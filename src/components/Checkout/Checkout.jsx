import { useRef, useState } from "react"
import { useCarritoContext } from "../../context/CartContext"
import { Link, useNavigate } from "react-router-dom"
import { createOrdenCompra, getProducts, updateProduct } from '../../firebase/firebase'
import { toast } from "react-toastify"

export const Checkout = () => {
    const [user, setUser] = useState({})

    const datForm = useRef()
    const { carrito, totalPrice, emptyCart } = useCarritoContext()
    const updateUser = (event) => {
        setUser(user => ({...user,[event.target.name]:event.target.value}))
    }

    let navigate = useNavigate()
    const consultarForm = (e) => {
        e.preventDefault()

        const datosFormulario = new FormData(datForm.current)
        const cliente = Object.fromEntries(datosFormulario)

        const aux = [...carrito]
        aux.forEach(prodCarrito => {
            getProducts(prodCarrito.id).then(prodBBD => {
                if (prodBBD.stock >= prodCarrito.quantity) {
                    prodBBD.stock -= prodCarrito.quantity
                    updateProduct(prodBBD.id, prodBBD) //Enviarle a la BDD el producto descontando su stock
                } else {
                    console.log("El stock no es mayor o igual a la cantidad que se quiere comprar")
                }
            })
        })
        const aux2 = aux.map(prod => ({ id: prod.id, quantity: prod.quantity, precio: prod.price }));

        createOrdenCompra(cliente, totalPrice(), aux2, new Date().toLocaleString('es-AR', { timeZone: Intl.DateTimeFormat().resolvedOptions().timeZone }))
            .then(ordenCompra => {
                toast(` 🛒 Muchas gracias por comprar con nosotros, su ID de compra es ${ordenCompra.id} por un total de ${totalPrice()}, en breve nos contactaremos para el envio`, {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "dark",
                });
                emptyCart()
                e.target.reset()
                navigate("/")
            })
            .catch(error => {
                console.error(error)
            })


    }
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
                        <form onSubmit={consultarForm} ref={datForm}>
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