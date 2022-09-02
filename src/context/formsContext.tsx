import React,{createContext} from 'react'

export const formContext = createContext<Record<string,unknown>>(null)

const FormContextProvider=(props:Record<string,unknown>)=>{
    return(
        <formContext.Provider value={props}>
            {props.children}
        </formContext.Provider>
    )
}

export default FormContextProvider