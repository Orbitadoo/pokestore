import '../../scss/_ItemListContainer.scss'
import ItemCount from '../ItemCount/ItemCount';
const ItemListContainer = ( {greeting} ) => {
    return (
        <div className='itemListContainer'>
            <h1> {greeting} </h1>
            <ItemCount></ItemCount>
        </div>
    )
}

export default ItemListContainer;