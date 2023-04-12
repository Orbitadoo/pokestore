const products = [
    {
        id : '1',
        name: "Bulbasaur",
        price: 1000,
        desc : "Pokemon type Grass",
        stock: '1',
        img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png"
    },
    {
        id: '2',
        name: "Ivysaur",
        price: 1500,
        desc : "Pokemon type Grass",
        stock: '5',
        img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png"
    },
    {
        id: 3,
        name: "Venusaur",
        price: 2000,
        desc : "Pokemon type Grass",
        stock: '5',
        img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/3.png"
    },
    {
        id: 4,
        name: "Charmander",
        price: 1000,
        desc : "Pokemon type Fire",
        stock: '1',
        img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png"
    },
    {
        id: 5,
        name: "Charmeleon",
        price: 1500,
        desc : "Pokemon type Fire",
        stock: '5',
        img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/5.png"
    },
    {
        id: 6,
        name: "Charizard",
        price: 2000,
        desc : "Pokemon type Fire",
        stock: '5',
        img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/6.png"
    },
    {
        id: 7,
        name: "Squirtle",
        price: 1000,
        desc : "Pokemon type Water",
        stock: '1',
        img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png"
    },
    {
        id: 8,
        name: "Wartortle",
        price: 1500,
        desc : "Pokemon type Water",
        stock: '5',
        img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/8.png"
    },
    {
        id: 9,
        name: "Blastoise",
        price: 2000,
        desc : "Pokemon type Water",
        stock: '5',
        img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/9.png"
    }
]
export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products)
        }, 200);
    })
}