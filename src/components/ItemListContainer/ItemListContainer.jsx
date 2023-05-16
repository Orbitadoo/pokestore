import '../../scss/_ItemListContainer.scss'
import { useEffect, useState } from 'react';
import ItemList from '../ItemList/ItemList';
import { useParams } from 'react-router';

import { getDocs, collection, query, where } from 'firebase/firestore'
import { db } from '../../firebase/firebase';

const ItemListContainer = () => {
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)

    const {categoryID} = useParams()

    useEffect(() => {
        setLoading(true)

        const collectionRef = categoryID
            ? query(collection(db, 'products'), where ('category', '==', categoryID))
            : collection(db, 'products')

        getDocs(collectionRef)
            .then(response => {
                const productsAdapted = response.docs.map(doc => {
                    const data = doc.data()
                    return { id: doc.id, ...data }
                })
                setProducts(productsAdapted)
            })
            .catch(error => {
                console.log(error)
            })
            .finally(() => {
                setLoading(false)
            })
    }, [categoryID])

    return (
        <div className='itemListContainer'>
            <ItemList products={products}/>
        </div>
    )
}

export default ItemListContainer;