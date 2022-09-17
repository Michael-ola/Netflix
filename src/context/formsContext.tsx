import React,{createContext} from 'react'

export const formContext = createContext<Record<string,unknown> | null>(null)

const FormContextProvider=(props:Record<string,unknown>)=>{
    return(
        <formContext.Provider value={props}>
            {props.children as JSX.Element}
        </formContext.Provider>
    )
}

export default FormContextProvider