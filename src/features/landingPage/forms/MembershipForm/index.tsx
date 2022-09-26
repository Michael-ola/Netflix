import React, {useState} from "react";
import { useForm, SubmitHandler } from "react-hook-form";

import  useInput from 'customHooks/useInput/useInput'
import {useNavigate} from 'react-router-dom'
import {useDispatch} from 'react-redux'
import {storeEmail} from 'lib/redux-store/Actions/membershipForm'
import{Submit,StyledForm,Img,Text} from './style/MembershipForm'

const chevronLogo= require('assets/images/icons/chevron-right.png')

interface IFormInput {
  email: string
}


export default function MembershipForm() {
  const navigate=useNavigate();
  const dispatch = useDispatch();

  const [submitButtonClicked,setSubmitButtonClicked]=useState<boolean|null>(null)
  const { register,formState: { errors }, handleSubmit,getValues } = useForm<IFormInput>();

  const Input= useInput({errors, getValues, register, 
    submitButtonState:submitButtonClicked,type:'email',name:'email',placeholder:'Email address',
    required:'Email is Required!'
  })

  const buttonClickedHandler=()=>{
    setSubmitButtonClicked(true);
  }

  const onSubmit: SubmitHandler<IFormInput> = (data) =>{
     localStorage.setItem('email', data.email.trim());
     dispatch(storeEmail(data.email.trim()))
     navigate('/sign-up')
  }

  return (
   <>
      <Text>Ready to watch? Enter your email to create or restart your membership.</Text>
      <StyledForm onSubmit={handleSubmit(onSubmit)}>
        {Input( {...{height:'62px',width:'450px',color:'#000',background:'#fff',
        media:[{
                  type:'max-width',
                  breakpoint:'600px',
                  width:'90%',
                  height:'auto'
              }]
        }})}

        <Submit onClick={buttonClickedHandler} type="submit"><span>Get Started</span><Img src={chevronLogo} /></Submit>
      </StyledForm>
   </>
  );

}
