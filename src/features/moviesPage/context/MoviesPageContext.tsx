import React,{createContext} from 'react';
import {MoviesCollectionType} from 'types/moviesDataType'

interface PropsType{
    children:JSX.Element | JSX.Element[],
    data:{
        moviesData:MoviesCollectionType[],
        setIsSearchText:React.Dispatch<React.SetStateAction<boolean>>
        isSearchText:boolean
    }
}

export const MoviesPageContext=createContext<PropsType["data"] | null>(null)

export function MoviesPageContextProvider(props:PropsType){
    return(
        <MoviesPageContext.Provider value={props.data}>
            {props.children}
        </MoviesPageContext.Provider>
    )
}