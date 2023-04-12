import '../../scss/_ItemListContainer.scss'
import { useState, useEffect } from 'react';
import { getProducts } from '../../asyncMock';
import ItemCount from '../ItemCount/ItemCount';
const ItemListContainer = ( {greeting} ) => {
    
    const [products, setProducts] = useState([])

    useEffect(() => {
        getProducts()
        .then(response => {
            setProducts(response)
        })
    }, [])

    return (


        <div className='itemListContainer'>
            <h1> {greeting} </h1>
            <ItemCount></ItemCount>
        </div>
    )
}

export default ItemListContainer;