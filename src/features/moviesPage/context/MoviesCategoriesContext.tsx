import React,{createContext} from 'react';
import {MoviesCollectionType} from 'types/moviesDataType'

interface PropsType{
    children:JSX.Element | JSX.Element[],
    data:MoviesCollectionType
}


export const CategoriesDataContext=createContext<MoviesCollectionType | null>(null)

export function CategoriesDataProvider(props:PropsType){
    return(
        <CategoriesDataContext.Provider value={props.data}>
            {props.children}
        </CategoriesDataContext.Provider>
    )
}