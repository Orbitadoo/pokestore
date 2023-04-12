import '../../scss/_ItemListContainer.scss'
import ItemCount from '../ItemCount/ItemCount';
import { getProducts } from '../../asyncMock';
import { useEffect, useState } from 'react';
const ItemListContainer = ( {greeting} ) => {

    const [products, setProducts] = useState([])

    useEffect(() => {
        getProducts()
            .then(response => {
                setProducts(response)
                console.log(products)
            })
    }, [products])

    return (
        <div className='itemListContainer'>
            <h1> {greeting} </h1>
            <ItemCount></ItemCount>
        </div>
    )
}

export default ItemListContainer;