import React from 'react';
import '../../scss/_ItemCount.scss'
import 'bootstrap/dist/css/bootstrap.min.css'
import pokeball from "./assets/pokeball.png"
import { useCount } from '../../hooks/useCount.js';
const ItemCount = ( {initial, min, max} ) => {
    
    const {count, incr, decr} = useCount(1, 1, 10);

    return (
        <div>
            <div className='handleCart'>
                <div className="btnCounter">
                    <button className='btnStock' onClick={() => decr()}>-</button>
                    <p>{count}</p>
                    <button className='btnStock' onClick={() => incr()}>+</button>
                </div>
                <div className="btnAddCart">
                    <button className="handleAdd" onClick={() => console.log("Agregaste " + count + " Pokemon(es) al Carrito")}>
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
