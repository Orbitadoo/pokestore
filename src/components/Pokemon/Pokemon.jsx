import React from 'react'
import { useState, useEffect } from 'react'
function Pokemon() {
  const [pokemon, setPokemon] = useState([]);
  const url = 'https://pokeapi.co/api/v2/pokemon/';
  useEffect(() => {
    fetch(url)
        .then((response) => response.json())
        .then(pokemon => {
            console.log(pokemon)
            setPokemon(pokemon)
        })
  }, []);

  return (
    <div>
        <p>{pokemon.id}</p>
    </div>
  )
}

export default Pokemon
