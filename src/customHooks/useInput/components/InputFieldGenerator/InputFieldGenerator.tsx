import React from 'react';
import TelephoneInput from '../TelephoneInput/TelephoneInput'
import PasswordInput from '../PasswordInput/PasswordInput'
import EmailOrTelephoneInput from '../EmailOrTelephoneInput/EmailOrTelephoneInput'
import TextOrEmailField from '../TextOrEmailField/TextOrEmailField'

const InputField=({type})=>{
  
    const generateInput=(type:string):JSX.Element=>{
        switch(type){
          case 'password':
          return(
            <PasswordInput/>
          )
  
          case 'text':
          case 'email':
          return(
           <TextOrEmailField type={type}/>
          )
          case 'tel':
          return(
            <TelephoneInput/>
          )
  
          case 'Email/Telephone':
          return(
            <EmailOrTelephoneInput/>
          )
  
          default:
          return<></>
        }
    }
  
    return(
      <>{generateInput(type)}</>
    )
  }

  export default InputField