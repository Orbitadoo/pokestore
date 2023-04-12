export const getProducts = () => {
return new Promise((resolve) => {   

    const url = 'https://pokeapi.co/api/v2/pokemon/';
     
    setTimeout(() => {
        resolve(() => {
            fetch(url)
            .then((response) => response.json())
            .then(pokemon => {
            console.log(pokemon.results)
        })
        })
    }, 500)
})
}