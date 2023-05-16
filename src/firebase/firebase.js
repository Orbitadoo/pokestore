import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'

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