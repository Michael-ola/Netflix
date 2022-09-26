import {
    doc,setDoc
}  from 'firebase/firestore'
import {v4 as uuidv4} from 'uuid'

import {db} from './firebase-config'
import {MoviesCollectionType} from 'types/moviesDataType'

const moviesData:MoviesCollectionType[]=require('data/movieCategories.json');


const setUniqueId = () => {
    const moviesDataCopy:MoviesCollectionType[]=structuredClone(moviesData);

    moviesDataCopy.forEach((data:MoviesCollectionType) => {
        data.category.id=uuidv4();
        data.Movies.forEach(movie => {
            movie.id=uuidv4();
        })
    })
    return moviesDataCopy
}

const data=setUniqueId();

export const setMoviesData=() => {
    data.forEach((movieCollection,index) => {
        const moviesDataCollectionRef=doc(db,'movies-data',`${index}`);
        setDoc(moviesDataCollectionRef,movieCollection).then((data) => {
            console.log(data);
        }).catch((error) => {
            throw new Error(error)
        })
    })
}

//setMoviesData(); call  in  index.js only once
