import {useContext} from 'react'
import {formContext} from '../context/formsContext'

const useFormContext=()=>{
    const context=useContext(formContext)
    if(context===null && context===undefined){
        throw new Error(`this context does not exist in this scope`)
    }
    return context
}

export default useFormContext