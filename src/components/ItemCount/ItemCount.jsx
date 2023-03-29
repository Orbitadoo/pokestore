import React from 'react';
import '../../scss/_ItemCount.scss'
import 'bootstrap/dist/css/bootstrap.min.css'
import pokeball from "./assets/pokeball.png"
import { useState } from 'react';
const ItemCount = ( {stock, initial, onAdd} ) => {
    const [counter, setCounter] = useState(initial);

    const decr = () => {
        counter > 1 && setCounter(counter - 1);
    }

    const incr = () => {
        stock > counter && setCounter(counter + 1);
    }
    return (
        <div>
            <div className='handleCart'>
                <div className="btnCounter">
                    <button className='btnStock' onClick={decr}>-</button>
                    <p>{counter}</p>
                    <button className='btnStock' onClick={incr}>+</button>
                </div>
                <div className="btnAddCart">
                    <button className="handleAdd" onClick={() => onAdd(counter)} disabled={!stock}>
                        {/* AÑADIR PLURAL SI ES QUE UN USUARIO AGREGA MÁS DE 1 POKEMON */}
                        <img src={pokeball} alt=""/>
                        <p>Capturar Pokémones</p>
                    </button>
                </div>
            </div>
        </div>
    );
}

export default ItemCount;
