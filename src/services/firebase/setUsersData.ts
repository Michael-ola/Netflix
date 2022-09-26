import {
    doc,setDoc
}  from 'firebase/firestore'

import {db} from './firebase-config'
import usersType from '../../types/usersDataType'

export const setUser=async (user:usersType,id:string,callback:() => void) => {
    const usersArr:usersType[]=[];
    usersArr.push(user);
    const usersDataCollectionRef=doc(db,'users-data',id)
    setDoc(usersDataCollectionRef,{users:usersArr}).then((data) => {
        console.log(data);
        callback();
    }).catch((error) => {
        throw new Error(error)
    })
}