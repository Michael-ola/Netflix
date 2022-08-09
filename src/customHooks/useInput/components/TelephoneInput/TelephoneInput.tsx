import  React,{useState,useContext} from 'react';
import {StyledTelephoneInput} from './styles/TelephoneInput'
import {InputContext} from '../../context/InputContext'

const TelephoneInput=({changeHandlerProp}:{changeHandlerProp?:()=>void})=>{
    const [phoneNumberState,setPhoneNumberState]=useState(false)
    const context=useContext(InputContext)
    const onChangeHandler=(e:React.ChangeEvent<HTMLInputElement>)=>{
        if(context.inputValue && context.inputValue()){
        setPhoneNumberState(true)
        }else{setPhoneNumberState(false)}
    }

    return (
        <StyledTelephoneInput number={`${phoneNumberState}`}
        international
        defaultCountry='NG'
        control={context.control}
        {...context.rest} ref={(e:HTMLInputElement) => {context.Ref(e); context.inputRef.current = e}}  
            onBlur={context.inputBlurHandler} onChange={(e:React.ChangeEvent<HTMLInputElement>)=>{ onChangeHandler(e);
            changeHandlerProp && changeHandlerProp()
            }}
        />
    )
}

export default TelephoneInput