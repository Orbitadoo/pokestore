const products = [
    {
        id : 1,
        name: "Bulbasaur",
        price: 1000,
        desc : "Pokemon type Grass",
        stock: 1,
        img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
        category: 1
    },
    {
        id: 2,
        name: "Ivysaur",
        price: 1500,
        desc : "Pokemon type Grass",
        stock: 5,
        img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/2.png",
        category: 1
    },
    {
        id: 3,
        name: "Venusaur",
        price: 2000,
        desc : "Pokemon type Grass",
        stock: 5,
        img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/3.png",
        category: 1
    },
    {
        id: 4,
        name: "Charmander",
        price: 1000,
        desc : "Pokemon type Fire",
        stock: 1,
        img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png",
        category: 2
    },
    {
        id: 5,
        name: "Charmeleon",
        price: 1500,
        desc : "Pokemon type Fire",
        stock: 5,
        img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/5.png",
        category: 2
    },
    {
        id: 6,
        name: "Charizard",
        price: 2000,
        desc : "Pokemon type Fire",
        stock: 5,
        img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/6.png",
        category: 2
    },
    {
        id: 7,
        name: "Squirtle",
        price: 1000,
        desc : "Pokemon type Water",
        stock: 1,
        img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png",
        category:3
    },
    {
        id: 8,
        name: "Wartortle",
        price: 1500,
        desc : "Pokemon type Water",
        stock: 5,
        img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/8.png",
        category: 3
    },
    {
        id: 9,
        name: "Blastoise",
        price: 2000,
        desc : "Pokemon type Water",
        stock: 5,
        img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/9.png",
        category: 3
    }
]
export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products)
        }, 500);
    })
}

export const getProductById = (productId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.find(prod => prod.id === parseInt(productId)))
        }, 500);
    })
}