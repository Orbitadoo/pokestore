const products = [
    {
        id : 1,
        name: "Bulbasaur",
        price: 1000,
        desc : "Pokemon type Grass",
        stock: 1,
        img: "https://firebasestorage.googleapis.com/v0/b/pokestore-cd808.appspot.com/o/1.png?alt=media&token=7cf89864-623c-4b2d-9599-c10fce749630",
        category: 1
    },
    {
        id: 2,
        name: "Ivysaur",
        price: 1500,
        desc : "Pokemon type Grass",
        stock: 5,
        img: "https://firebasestorage.googleapis.com/v0/b/pokestore-cd808.appspot.com/o/2.png?alt=media&token=9a841cdc-0430-4f6c-843b-6d711ac91eff",
        category: 1
    },
    {
        id: 3,
        name: "Venusaur",
        price: 2000,
        desc : "Pokemon type Grass",
        stock: 5,
        img: "https://firebasestorage.googleapis.com/v0/b/pokestore-cd808.appspot.com/o/3.png?alt=media&token=25a82737-a88f-414e-a800-8a7db1d05cb4",
        category: 1
    },
    {
        id: 4,
        name: "Charmander",
        price: 1000,
        desc : "Pokemon type Fire",
        stock: 1,
        img: "https://firebasestorage.googleapis.com/v0/b/pokestore-cd808.appspot.com/o/4.png?alt=media&token=f7f410b2-7447-4180-9fa7-f005b86ffba0",
        category: 2
    },
    {
        id: 5,
        name: "Charmeleon",
        price: 1500,
        desc : "Pokemon type Fire",
        stock: 5,
        img: "https://firebasestorage.googleapis.com/v0/b/pokestore-cd808.appspot.com/o/5.png?alt=media&token=e2b88d99-680a-4691-95df-38ac2f300d51",
        category: 2
    },
    {
        id: 6,
        name: "Charizard",
        price: 2000,
        desc : "Pokemon type Fire",
        stock: 5,
        img: "https://firebasestorage.googleapis.com/v0/b/pokestore-cd808.appspot.com/o/6.png?alt=media&token=4ba2ad76-583a-485d-bf6f-ab746c6faf19",
        category: 2
    },
    {
        id: 7,
        name: "Squirtle",
        price: 1000,
        desc : "Pokemon type Water",
        stock: 1,
        img: "https://firebasestorage.googleapis.com/v0/b/pokestore-cd808.appspot.com/o/7.png?alt=media&token=6fb34185-99f5-4ed8-9190-9ea13483ca00",
        category: 3
    },
    {
        id: 8,
        name: "Wartortle",
        price: 1500,
        desc : "Pokemon type Water",
        stock: 5,
        img: "https://firebasestorage.googleapis.com/v0/b/pokestore-cd808.appspot.com/o/8.png?alt=media&token=58f23f26-92c4-4391-a5c2-821f5f45c9ca",
        category: 3
    },
    {
        id: 9,
        name: "Blastoise",
        price: 2000,
        desc : "Pokemon type Water",
        stock: 5,
        img: "https://firebasestorage.googleapis.com/v0/b/pokestore-cd808.appspot.com/o/9.png?alt=media&token=f815d6df-fb1d-4ded-a043-b2bbac1dd754",
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