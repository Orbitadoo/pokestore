import '../../scss/_ItemListContainer.scss'
import ItemCount from '../ItemCount/ItemCount';
const ItemListContainer = ( {greeting} ) => {
    return (
        <div className='itemListContainer'>
            <h1> {greeting} </h1>
            <ItemCount stock={10} initial={1} onAdd={(counter) => console.log("Agregaste " + counter + " Pokemon(es) al Carrito")}></ItemCount>
        </div>
    )
}

export default ItemListContainer;