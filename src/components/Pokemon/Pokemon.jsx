import React from 'react'
import { useState, useEffect } from 'react'
function Pokemon() {
  const [pokemon, setPokemon] = useState([]);
  const URL = 'https://pokeapi.co/api/v2/pokemon/';
  useEffect(() => {
    for (let i = 1; i <= 20; i++) {
      fetch(URL + i)
        .then((response) => response.json())
        .then(pokemon => {
            setPokemon(pokemon)
            console.log(pokemon)
        })
    }
  }, []);

  return (
    <div>
        <p>{pokemon.id}</p>
    </div>
  )
}

export default Pokemon
