import React,{useState,useEffect,useContext,useCallback} from 'react';
import TelephoneInput from '../TelephoneInput/TelephoneInput'
import TextOrEmailField from '../TextOrEmailField/TextOrEmailField'
import {InputContext} from '../../context/InputContext'

const EmailAndTelephoneInput=()=>{
      const [inputType,setInputType]=useState('email')
      const context=useContext(InputContext)
      useEffect(() => {
        context?.inputRef?.current?.focus()
      },[inputType,context?.inputRef])
  
      const emailOnChangeHandler =useCallback(()=>{
        if(context?.inputValue && !(context.inputValue().match(/[a-zA-Z/@.]/g) || context.inputValue().length===0)){
          setInputType('telephone')
        }
        else{setInputType('email')}
      },[context])

      const telephoneOnChangeHandler=useCallback(() => {
        if(context?.inputValue && !(context.inputValue())){
          setInputType('email')
        }
      },[context])

    return(<>
      {inputType==='telephone'?
        <TelephoneInput changeHandlerProp={telephoneOnChangeHandler}/>:
        <TextOrEmailField type='email' changeHandlerProp={emailOnChangeHandler}/>   
      }</>)
}

export default EmailAndTelephoneInput