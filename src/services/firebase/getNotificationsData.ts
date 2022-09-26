import {doc,getDoc } from "firebase/firestore";
import {notificationType} from "types/notificationsDataType";
import {db} from './firebase-config'

export const getNotificationsData=(id:string)=>{
    const notificationsDataCollectionRef=doc(db,'notifications-data',id);
    return getDoc(notificationsDataCollectionRef).then((snapshot)=>{
        return snapshot.data()?.notifications as notificationType[];
    }).catch((error)=>{
        throw new Error(error);
    })
}