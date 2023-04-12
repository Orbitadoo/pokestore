import React from 'react'
const Item = ( {id, name, img, price, stock} ) => {
  return (
    <div>
        <p class="pokemon-id-back">#${}</p>
        <div class="pokemon-imagen">
        </div>
        <div class="pokemon-info">
            <div class="nombre-contenedor">
                <p class="pokemon-id">#${}</p>
                <h2 class="pokemon-nombre">${}</h2>
            </div>
            <div class="pokemon-tipos">
                ${}
            </div>
            <div class="pokemon-stats">
            </div>
        </div>
    </div>
  )
}

export default Item

