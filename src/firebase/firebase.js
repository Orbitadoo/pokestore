import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'
import { addDoc, collection, getDoc, doc, deleteDoc, updateDoc } from "firebase/firestore";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAMqtgCp-okZqe5vezVovdKFb-PlYBC0Mw",
  authDomain: "pokestore-cd808.firebaseapp.com",
  projectId: "pokestore-cd808",
  storageBucket: "pokestore-cd808.appspot.com",
  messagingSenderId: "629061430702",
  appId: "1:629061430702:web:1d06a794fe1d99dc832c3f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore()

// Buy order
export const getProducts = async () => {
  const prods = await getDoc(collection(db, "products "))
  const items = prods.docs.map(prod => {
      return { ...prod.data(), id: prod.id }
  })
  return items
}

//Tanto Update como Delete no devuelven un estado
export const updateProduct = async (id, info) => {
  await updateDoc(doc(db, "productos", id), info)
}

export const deleteProduct = async (id) => {
  await deleteDoc(doc(db, "productos", id))
}
// CREATE y READ OrdenCompra

export const createOrdenCompra = async (cliente, precioTotal, carrito, fecha) => {
    const ordenCompra = await addDoc(collection(db, "ordenCompra"), {
        cliente: cliente,
        items: carrito,
        precioTotal: precioTotal,
        fecha: fecha
    })
    return ordenCompra
}

export const getOrdenCompra = async (id) => {
    const ordenCompra = await getDoc(doc(db, "ordenCompra", id))
    const item = { ...ordenCompra.data(), id: ordenCompra.id }
    return item
}

export const deleteOrdenCompra = async (id) => {
    await deleteDoc(doc(db, "ordenCompra", id))
}