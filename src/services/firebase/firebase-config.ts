import { initializeApp } from "firebase/app";
import  {
    getFirestore,collection 
}  from "firebase/firestore";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: "netflix-clone-6fb1e.firebaseapp.com",
  projectId: "netflix-clone-6fb1e",
  storageBucket: "netflix-clone-6fb1e.appspot.com",
  messagingSenderId: "594802240264",
  appId: process.env.REACT_APP_FIREBASE_APP_ID
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

export const db=getFirestore();

export const moviesDataCollectionRef=collection(db,'movies-data');

export const usersDataCollectionRef=collection(db,'users-data');

