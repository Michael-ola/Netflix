import React, {useRef,useState,useEffect,useCallback,useContext} from "react";
import {InputContext,ContextProvider} from './context/InputContext'
import{FieldWrapper,InputWrapper} from './styles/useInput'

import Label from './components/Label/Label'
import InputField from './components/InputFieldGenerator/InputFieldGenerator'
import ErrorMessage from './components/ErrorMessage/ErrorMessage'

interface InputProps{
    errors:any,
    getValues:Function,
    register:Function,
    submitButtonState:boolean|null,
    control?:any,
    type:string,
    name:string,
    placeholder:string,
    required?:string,
    minLength?:[number,string],
    pattern?:[string,string],
    maxLength?:[number,string]
  }
interface customStyleType{
    background?:string,
    switchBackground?:string,
    color?:string,
    margin?:string,
    padding?:string,
    width?:string,
    height?:string,
    borderRadius?:string,
    border?:string,
    labelColor?:string,
    fontSize?:string,
    errorFontSize?:string,
    media?:{
        type:'max-width'|'min-width',
        breakpoint:string,
        width:string,
        height:string,
        borderRadius?:string
    }[]
}


export default function useInput({errors,getValues,register,control,submitButtonState,type,name,
  required,placeholder,pattern,minLength:min,maxLength:max}:InputProps){
    
  const [labelClickState,setlabelClickState]=useState(false)
    const inputRef= useRef<HTMLInputElement | null>(null)
    const {ref,onBlur,onChange, ...rest}=register(name,{required:required,
       minLength:min && {value:min[0],message:min[1]},
       maxLength:max && {value:max[0],message:max[1]}})
  
    useEffect(() => {
      if(submitButtonState===true || submitButtonState===false){
        submitButtonHandler(submitButtonState)
      }
    },[submitButtonState])

    const inputChangeHandler=() => {
        setlabelClickState(true)
    }
  
    const submitButtonHandler=(state:boolean|null) => {
      setlabelClickState(true)
      state && (inputRef.current && inputRef.current.focus())
    }
  
    const labelClickedHandler=useCallback(()=>{
      setlabelClickState(true)
      inputRef.current && inputRef.current.focus()
    },[inputRef,setlabelClickState])

    const inputBlurHandler=useCallback(()=>{
      !getValues(name) && setlabelClickState(false)
    },[name,getValues])

    const InputCallback= useCallback((customStyle?:customStyleType) =>{
      if(labelClickState && customStyle && customStyle.switchBackground){
        customStyle.background=customStyle['switchBackground']
      }

      return(
        <ContextProvider type={type} inputValue={()=>getValues(name)} customStyle={customStyle} 
          errors={errors[name]} labelClickState={labelClickState} labelClickedHandler={labelClickedHandler}
          onChange={onChange} inputRef={inputRef} rest={rest} inputBlurHandler={inputBlurHandler}
          placeholder={placeholder} Ref={ref} inputChangeHandler={inputChangeHandler} control={control}
        >
           <Input/>
        </ContextProvider>
       )
     },[errors, inputBlurHandler,labelClickedHandler, labelClickState, name,
       placeholder, ref, rest,type,onChange,control,getValues])

    return(
        InputCallback
    )
  }

const  Input=()=>{
  const context=useContext(InputContext)
  return(
    <InputWrapper {...(context?.customStyle && {customStyle:context.customStyle})} >
      <FieldWrapper {...{error:context?.errors?true:false} } {...{labelClicked:context?.labelClickState}}
      {...(context?.customStyle && {customStyle:context?.customStyle})}>

        <Label/>
        <InputField type={context?.type as string}/> 
      </FieldWrapper>
      
      <ErrorMessage/>
    </InputWrapper>
  )
}