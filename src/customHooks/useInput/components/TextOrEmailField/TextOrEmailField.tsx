import React,{useContext} from 'react'
import {Field} from './styles/TextOrEmailField' 
import {InputContext} from '../../context/InputContext'

interface PropType{
    type:string,
    changeHandlerProp?:()=>void
}

export default function TextOrEmailField({type,changeHandlerProp}:PropType){
    const context=useContext(InputContext)
    return(
      <Field autoComplete='new-password' type={type} {...context?.rest} ref={(e) => {context?.Ref(e); if(context?.inputRef){
        context.inputRef.current = e as HTMLInputElement
        }}}  
        onBlur={context?.inputBlurHandler} onChange={(e)=>{context?.onChange(e); context?.inputChangeHandler();
        changeHandlerProp && changeHandlerProp()}}
      />
    )
}