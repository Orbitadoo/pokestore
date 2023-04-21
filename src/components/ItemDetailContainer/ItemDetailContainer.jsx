import { useState, useEffect } from 'react'
import ItemDetail from '../ItemDetail/ItemDetail'
import { getProductById } from '../../asyncMock'
import { useParams } from 'react-router'
const ItemDetailContainer = () => {
  const [product, setProduct] = useState()
  
  const {id} = useParams()

  useEffect(() => {
      getProductById(id)
      .then(response => {
          setProduct(response)
      })
  }, [id]);
  
  return (
    <div>
        <ItemDetail {...product}/>
    </div>
  )
}

export default ItemDetailContainer
