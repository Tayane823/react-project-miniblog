import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyDYqSugWyrD3VkE82OZl9YAzaC0l2ZYGxI",
  authDomain: "blog-fec69.firebaseapp.com",
  projectId: "blog-fec69",
  storageBucket: "blog-fec69.appspot.com",
  messagingSenderId: "112136357082",
  appId: "1:112136357082:web:e5c32adca87dd8348911e3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app)

export { db }