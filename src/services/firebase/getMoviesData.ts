import {getDocs } from "firebase/firestore";
import { MoviesCollectionType } from "types/moviesDataType";
import {moviesDataCollectionRef} from './firebase-config'

export const getMoviesData=()=>{
    const moviesData:MoviesCollectionType[]=[];

    return getDocs(moviesDataCollectionRef).then((snapshot)=>{
        snapshot.docs.forEach((doc)=>{
            moviesData.push(doc.data() as MoviesCollectionType);
        })

        return moviesData  //sort moviesData
    }).catch((error) => {
        throw new Error(error)
    })
}
