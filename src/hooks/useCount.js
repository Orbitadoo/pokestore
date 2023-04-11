import { useState } from 'react'
export const useCount = ( initial, min, max ) => {

    const [count, setCount] = useState(initial);

    const incr = () => count < max && setCount(count + 1);

    const decr = () => count > min && setCount(count - 1);

    const onAdd = () => console.log("Agregaste " + count + " Pokemon(es) al Carrito");
    
    return {count, incr, decr, onAdd}
}
