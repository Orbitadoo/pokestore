import { useState } from 'react'
export const useCount = ( {initial, min, max} ) => {

    const [count, setCount] = useState(initial);

    const incr = () => count < max && setCount(count + 1);

    const decr = () => count > min && setCount(count - 1);

    return {count, incr, decr}
}
