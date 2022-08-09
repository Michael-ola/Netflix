import React, {useState} from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import{Submit,StyledForm,Img,Text} from './style/MembershipForm'
import chevronLogo from '../../assets/images/icons/chevron-right.png'
import  useInput from '../../customHooks/useInput/useInput'


interface IFormInput {
  email: string
}


export default function MembershipForm() {
  const [submitButtonClicked,setSubmitButtonClicked]=useState<boolean|null>(null)
  const { register,formState: { errors }, handleSubmit,getValues } = useForm<IFormInput>();

  const Input= useInput({errors, getValues, register, 
    submitButtonState:submitButtonClicked,type:'email',name:'email1',placeholder:'Email address',
    required:'Email is Required!'
  })

  const buttonClickedHandler=()=>{
    setSubmitButtonClicked((prevState)=>!prevState)
  }

  const onSubmit: SubmitHandler<IFormInput> = (data) =>{
     console.log(data);
     const fdata= new FormData();
     fdata.append('picture', data.email);
     //console.log(fdata.getAll('picture'));
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
