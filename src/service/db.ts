import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: import.meta.env.API_KEY,
  authDomain: "portifolio-76b16.firebaseapp.com",
  projectId: "portifolio-76b16",
  storageBucket: "portifolio-76b16.firebasestorage.app",
  messagingSenderId: "1046207533207",
  appId: "1:1046207533207:web:d3e65f21a328666c9799d2",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
