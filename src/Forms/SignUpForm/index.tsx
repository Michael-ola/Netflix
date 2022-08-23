import React,{useState,useEffect,useRef} from 'react'
import { useForm, SubmitHandler } from "react-hook-form";
import {useNavigate} from 'react-router-dom'

import {Container,InputContainer,FieldWrapper,InputField,FieldLabel,Error,StyledForm,SubmitButton,CheckBoxContainer,
        CheckBox} from './style/SignUpForm.style.js'

interface IFormInput {
    email: string,
    password: string
}

export default function SignUpForm(){
    return (
        <Container>
            <Form/>
        </Container>
    )
}

const Form=()=>{
    const [submitButtonClicked,setSubmitButtonClicked]=useState(false)
    const { register,control,formState: { errors }, handleSubmit,getValues } = useForm<IFormInput>();
    const navigate=useNavigate();

    const buttonClickedHandler=()=>{
      setSubmitButtonClicked(true)
    }
    useEffect(() => {
        console.log('signup form')
    },[])
  
    const onSubmit: SubmitHandler<IFormInput> = (data) =>{
       console.log(data);
       const fdata= new FormData();
       navigate('/sign-up/step3')
       //fdata.append('picture', data.email);
       //console.log(fdata.getAll('picture'));
    }
    
    return(
        <StyledForm autoComplete='off' onSubmit={handleSubmit(onSubmit)}>
            <EmailInput control={control} errors={errors} register={register} getValues={getValues} 
             submitButtonClicked={submitButtonClicked}/>
            
            <PasswordInput errors={errors} register={register} getValues={getValues}
             submitButtonClicked={submitButtonClicked}/>

             <CheckboxComponent/>

            <SubmitButton type='submit' onClick={buttonClickedHandler}>Next</SubmitButton>
        </StyledForm>
    )
}

const EmailInput=({errors,register,getValues,submitButtonClicked,control})=>{
    const inputRef = useRef<HTMLInputElement>(null)
    const [labelClicked,setLabelClicked] =useState(false)
    const {ref,onBlur,onChange, ...rest}=register('email',{required:'Email is required!'})
    const [isEmail,setIsEmail] = useState<boolean>(null)
    let emailValue=getValues('email');

    useEffect(() => {
        (emailValue || submitButtonClicked) && setLabelClicked(true) 
    },[emailValue,submitButtonClicked])

    const validateEmail = email =>
        /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
    email);

    const labelClickedHandler=()=>{
        setLabelClicked(true);
        inputRef.current.focus()
    }
    const InputBlurHandler=()=>{
        !getValues('email') && setLabelClicked(false);
        inputRef.current.blur();
    }
    const inputChangeHandler=(event:React.ChangeEvent<HTMLInputElement>)=>{
        
        if(validateEmail(event.target.value)){
            setIsEmail(true);
        }
        else{
            setIsEmail(false);
        }
    }
    const inputFocusHandler=()=>{
        setLabelClicked(true)
    }
    return(
        <InputContainer>
            <FieldWrapper {...{isEmail}}>
                <InputField type='email' {...rest} ref={(e)=>{ref(e);inputRef.current=e}} 
                    onChange={(e)=>{onChange(e);inputChangeHandler(e)}} onBlur={InputBlurHandler}
                    onFocus={inputFocusHandler}/>
                <FieldLabel {...{labelClicked}} tabIndex={0} onClick={labelClickedHandler}>Email</FieldLabel>
            </FieldWrapper>
            {errors && <Error>{errors.email?.message}</Error>}
        </InputContainer>
    )
}

const PasswordInput =({errors,register,getValues,submitButtonClicked})=>{
    const inputRef = useRef<HTMLInputElement>(null)
    const [labelClicked,setLabelClicked] =useState(false)
    const [lengthAccepted,setLengthAccepted]=useState<boolean>(null)

    const message='Your password must contain between 4 and 60 characters.'
    const {ref,onBlur,onChange, ...rest}=register('password',{required:'Password is required!',minLength:{value:4,message:message},
    maxLength:{value:60,message:message}})

    const labelClickedHandler=()=>{
        setLabelClicked(true);
        inputRef.current.focus()
    }
    const InputBlurHandler=()=>{
        !getValues('password') && setLabelClicked(false);
        inputRef.current.blur();
    }
    const inputChangeHandler=(event:React.ChangeEvent<HTMLInputElement>)=>{
        
        if(event.target.value.length>=4 && event.target.value.length<=60){
            setLengthAccepted(true);
        }
        else{
            setLengthAccepted(false);
        }
    }
    const inputFocusHandler=()=>{
        setLabelClicked(true)
    }
    return(
         <InputContainer>
            <FieldWrapper {...{lengthAccepted}}>
                <InputField type='password' {...rest} ref={(e)=>{ref(e);inputRef.current=e}} 
                    onChange={(e)=>{onChange(e);inputChangeHandler(e)}} onBlur={InputBlurHandler}
                    onFocus={inputFocusHandler}/>
                <FieldLabel {...{labelClicked}} tabIndex={0} onClick={labelClickedHandler}>Password</FieldLabel>
            </FieldWrapper>
            {errors && <Error>{errors.password?.message}</Error>}
        </InputContainer>
    )
}

const CheckboxComponent =()=>{
    return(
            <CheckBoxContainer>
                <CheckBox id='checkbox'  type='checkbox' />
                <label htmlFor='checkbox'>Please do not email me Netflix special offers</label>
            </CheckBoxContainer>
    )
}
