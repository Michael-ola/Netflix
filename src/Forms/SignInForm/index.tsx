import React,{useState,useEffect} from 'react'
import { useForm, SubmitHandler } from "react-hook-form";
import {Container,Title,StyledForm,SubmitButton,CheckBoxContainer,
        CheckBox,CheckboxAndHelpContainer,Help,SignUpLink,MetaTextContainer,LearnMoreLink} from './style/SignInForm'
import  useInput from '../../customHooks/useInput/useInput'
import {useDispatch} from 'react-redux'
import {auth} from '../../redux-store/Actions/auth'


interface IFormInput {
    signInContact: string,
    password: string
}

export default function SignInForm(){
    return (
        <Container>
            <Title>Sign In</Title>
            <Form/>
        </Container>
    )
}

const Form=()=>{
    const [submitButtonClicked,setSubmitButtonClicked]=useState<boolean|null>(null)
    const { register,control,formState: { errors }, handleSubmit,getValues } = useForm<IFormInput>();
    const dispatch = useDispatch();
    
    const buttonClickedHandler=()=>{
      setSubmitButtonClicked((prevState)=>!prevState)
    }
  
    const onSubmit: SubmitHandler<IFormInput> = (data) =>{
        const contact=data.signInContact.trim();
        const password=data.password.trim();
        console.log(data);
        if(contact && password){
            //navigate('/sign-up/planform')
            dispatch(auth(contact,password,false));
        }
    }
    
    return(
        <StyledForm autoComplete='off' onSubmit={handleSubmit(onSubmit)}>
            <ContactInput control={control} errors={errors} register={register} getValues={getValues} 
             submitButtonClicked={submitButtonClicked}/>
            
            <PasswordInput errors={errors} register={register} getValues={getValues}
             submitButtonClicked={submitButtonClicked}/>

            <SubmitButton type='submit' onClick={buttonClickedHandler}>Sign In</SubmitButton>

            <CheckboxAndHelp/>
            <MetaText/>
        </StyledForm>
    )
}

const ContactInput=({errors,register,getValues,submitButtonClicked,control})=>{
    const userContactInput= useInput({errors, getValues, register, 
        submitButtonState:submitButtonClicked,type:'Email/Telephone',name:'signInContact',control,
        placeholder:'Email or Phone number',required:'Please enter a valid email or phone number'
    })
    return(
        <>{
            userContactInput({height:'60px',width:'100%',color:'#fff',border:'none',
            background:'#333333',switchBackground:'#454545',borderRadius:'4px',
            labelColor:'#8c8c8c',errorFontSize:'14px',padding:'13px 0 0 0'})
        }</>
    )
}

const PasswordInput =({errors,register,getValues,submitButtonClicked})=>{
    const message='Your password must contain between 4 and 60 characters.'
    const passwordInput= useInput({errors, getValues, register, 
        submitButtonState:submitButtonClicked,type:'password',name:'password',placeholder:'Password',
        required:message,minLength:[4,message],
        maxLength:[60,message]
    })
    return(
        <>{
            passwordInput({height:'60px',width:'100%',color:'#fff',border:'none',
            background:'#333333',switchBackground:'#454545',borderRadius:'4px',
            labelColor:'#8c8c8c',errorFontSize:'14px',padding:'13px 0 0 0'})
        }</>
    )
}

const CheckboxAndHelp=()=>{
    return(
        <CheckboxAndHelpContainer>
            <CheckBoxContainer>
                <CheckBox id='checkbox'  type='checkbox' />
                <label htmlFor='checkbox'>Remember me</label>
            </CheckBoxContainer>
            <Help>Need help?</Help>
        </CheckboxAndHelpContainer>
    )
}

const MetaText=()=>{
    return(
        <MetaTextContainer>
            <h3>New to Netflix? <SignUpLink to='/'>Sign UP now.</SignUpLink></h3>
            <h5>{`This page is protected by Google reCAPTCHA to ensure you're not a bot. `}
                <LearnMoreLink to='/'>Learn more</LearnMoreLink></h5>
        </MetaTextContainer>
    )
}