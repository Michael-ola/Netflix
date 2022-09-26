import {
    doc,setDoc
}  from 'firebase/firestore'

import {db} from './firebase-config'
import {notificationType} from '../../types/notificationsDataType'

export const setNotificationList=async (notification:notificationType,id:string,callback?:() => void) => {
    const notificationsArr:notificationType[]=[];
    notificationsArr.push(notification);
    const notificationsDataCollectionRef=doc(db,'notifications-data',id)
    setDoc(notificationsDataCollectionRef,{notifications:notificationsArr}).then((data) => {
        callback?.();
    }).catch((error) => {
        throw new Error(error)
    })
}