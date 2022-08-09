import React,{createContext} from 'react';

export const MoviesPageContext=createContext(null)

export function MoviesPageContextProvider(props){
    return(
        <MoviesPageContext.Provider value={props.data}>
            {props.children}
        </MoviesPageContext.Provider>
    )
}