import '../../scss/_ItemListContainer.scss'
import ItemCount from '../ItemCount/ItemCount';
import { getProducts } from '../../asyncMock';
import { useEffect, useState } from 'react';
import ItemList from '../ItemList/ItemList';
const ItemListContainer = () => {

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
            <ItemCount></ItemCount>
            <ItemList products={products}/>
        </div>
    )
}

export default ItemListContainer;