import { useState, useEffect } from 'react'
import ItemDetail from '../ItemDetail/ItemDetail'
import { getProductById } from '../../asyncMock'
const ItemDetailContainer = () => {
  const [product, setProduct] = useState()
  
  useEffect(() => {
      getProductById(1)
      .then(response => {
          setProduct(response)
      })
  }, []);
  
  return (
    <div>
        <ItemDetail {...product}/>
    </div>
  )
}

export default ItemDetailContainer
