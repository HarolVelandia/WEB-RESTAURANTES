// src/firebase/config.js
import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: 'AIZA...Xcg',
  authDomain: 'restaurante-app-5f0f2.firebaseapp.com',
  projectId: 'restaurante-app-5f0f2',
  storageBucket: 'restaurante-app-5f0f2.appspot.com',
  messagingSenderId: '285453354370',
  appId: '1:285453354370:web:7a2a180914ce1aa3c93b9b'
}

// Inicializa Firebase
const app = initializeApp(firebaseConfig)
const db = getFirestore(app)

export { db }
