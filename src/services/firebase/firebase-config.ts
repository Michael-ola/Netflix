import { initializeApp } from "firebase/app";
import  {
    getFirestore,collection 
}  from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDSsWg2h4b5aFqSLbtlcp6bnc7e22D1fj4",
  authDomain: "netflix-clone-6fb1e.firebaseapp.com",
  projectId: "netflix-clone-6fb1e",
  storageBucket: "netflix-clone-6fb1e.appspot.com",
  messagingSenderId: "594802240264",
  appId: "1:594802240264:web:8ae5843dcf039d1ab15abd"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

export const db=getFirestore();

export const moviesDataCollectionRef=collection(db,'movies-data');

export const usersDataCollectionRef=collection(db,'users-data');

