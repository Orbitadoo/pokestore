import React from 'react'
import { Link } from 'react-router-dom'
const Item = ( {id, name, img, price, stock} ) => {
  return (
    <div className='Item col-lg-4 col-md-6 col-12 d-flex'>
        <div className="detail d-flex flex-row flex-wrap my-4 justify-content-center align-items-center">
            <div className="detail__id d-flex flex-row justify-content-center align-items-center">
                <p>#00{id}</p>
            </div>
            <div className="detail__img d-flex flex-row justify-content-center align-items-center">
                <img src={img} alt={name}/>
            </div>
            <div className="detail__name d-flex flex-row justify-content-center align-items-center">
                <h3 className="overflow-hidden">
                    {name}
                </h3>
            </div>
            <div className="detail__price d-flex flex-row justify-content-center align-items-center">
                <p>${price}</p>
            </div>
            <div className="detail__button d-flex flex-row justify-content-center align-items-center">
                <Link className='btn btn-dark' to={`/product/${id}`}>Ver</Link>
            </div>

        </div>
    </div>
  )
}

export default Item
