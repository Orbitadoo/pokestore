import React, { useState } from 'react'
import '../ItemCount/ItemCount'
import ItemCount from '../ItemCount/ItemCount'
import { Link } from 'react-router-dom'
import { useCarritoContext } from '../../context/CartContext'
const ItemDetail = ( {id, img, name, price, stock, category, desc} ) => {
    const {addItem} = useCarritoContext()

    const [add, setAdd] = useState(true)

    const item = {
        id, name, price
    }

    const handleAdd = () => {
        setAdd(!add)
        console.log(add)
    }

    addItem(item, count)

  return (
    <div className='ItemDetail col-lg-4 col-md-6 col-12 d-flex'>
        <div className="detail d-flex flex-row flex-wrap my-4 justify-content-center align-items-center">
            <div className="detail__id d-flex flex-row justify-content-center align-items-center">
                <p>#00{id}</p>
            </div>
            <div className="detail__img d-flex flex-row justify-content-center align-items-center">
                <img src={img} alt={name}/>
            </div>
            <div className="detail__price d-flex flex-row justify-content-center align-items-center">
                <p>${price}</p>
            </div>
            <div className="detail__price d-flex flex-row justify-content-center align-items-center">
                <p>{stock} {name} in Stock</p>
            </div>
            <div className="detail__button d-flex flex-row justify-content-center align-items-center">
                {
                add ? (
                    <ItemCount initial={1} min={1} max={stock} onAdd={handleAdd}/>
                    ) : 
                    (
                    <Link className='btn btn-primary' to="/cart">Terminar Compra</Link>
                    )
                }
            </div>
        </div>
    </div>
  )
}

export default ItemDetail
