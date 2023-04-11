import '../../scss/_ItemListContainer.scss'
import ItemCount from '../ItemCount/ItemCount';
const ItemListContainer = ( {greeting} ) => {
    return (
        <div className='itemListContainer'>
            <h1> {greeting} </h1>
            <ItemCount initial={1} min={1} max={10}></ItemCount>
        </div>
    )
}

export default ItemListContainer;