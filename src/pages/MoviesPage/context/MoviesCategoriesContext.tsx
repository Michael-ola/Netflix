import React,{createContext} from 'react';

export const CategoriesDataContext=createContext(null)

export function CategoriesDataProvider(props){
    return(
        <CategoriesDataContext.Provider value={props.data}>
            {props.children}
        </CategoriesDataContext.Provider>
    )
}