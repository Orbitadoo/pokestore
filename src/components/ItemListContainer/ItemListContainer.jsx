import '../../scss/_ItemListContainer.scss'
import ItemCount from '../ItemCount/ItemCount';
import { getProducts } from '../../asyncMock';
import { useEffect, useState } from 'react';
import ItemList from '../ItemList/ItemList';
import { useParams } from 'react-router';
const ItemListContainer = () => {

    const [products, setProducts] = useState([])

    const {category} = useParams()

    useEffect(() => {
        if (category) {
            getProducts()
            .then(response => {
                const filtrarProductos = response.filter(prod => prod.category === parseInt(category))
                setProducts(filtrarProductos)
            })
        } else {
            getProducts()
            .then(response => {
                setProducts(response)
            })
        }
    }, [products, category])

    return (
        <div className='itemListContainer'>
            <ItemCount></ItemCount>
            <ItemList products={products}/>
        </div>
    )
}

export default ItemListContainer;