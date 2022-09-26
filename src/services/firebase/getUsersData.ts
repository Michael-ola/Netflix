import {doc,getDoc } from "firebase/firestore";
import userType from "types/usersDataType";
import {db} from './firebase-config'

export const getUserData=(id:string)=>{
    const usersDataCollectionRef=doc(db,'users-data',id);
    return getDoc(usersDataCollectionRef).then((snapshot)=>{
        return snapshot.data()?.users as userType[];
    }).catch((error)=>{
        throw new Error(error);
    })
}