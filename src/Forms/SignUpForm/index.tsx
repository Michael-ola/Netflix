import React,{useState} from 'react'
import {useNavigate} from 'react-router-dom'
import FormContextProvider from '../../context/formsContext'
import {Container,StyledForm} from './style/SignUpForm.style.js'
import Email from './email'
import Password from './password'
import Checkbox from './checkBox'
import SubmitButton from '../../components/NextPrevButton'
import {useSelector,useDispatch} from 'react-redux'
import {auth} from '../../redux-store/Actions/auth'

export default function SignUpForm(){
    return (
        <Container>
            <Form/>
        </Container>
    )
}

const Form=()=>{
    const [submitButtonClicked,setSubmitButtonClicked]=useState(false)
    const navigate=useNavigate();
    const dispatch = useDispatch();
    const storedEmail=useSelector(state=>{
        return state?.emailStore.email
    })
    const [formObject,setFormObject]=useState(
        {
            email:storedEmail,
            password:'',
            checkBox:false,
        }
    )

    const setFormData=(inputName:string,value:string|boolean) => {
        setFormObject(prevData=>{
            const formCopy={...prevData,[inputName]:value}
            return formCopy
        })
    }

    const buttonClickedHandler=(event:React.MouseEvent<HTMLButtonElement>)=>{
        setSubmitButtonClicked(true)
    }
    const formSubmitHandler=(event:React.FormEvent<HTMLFormElement>)=>{
        event.preventDefault();
        console.log(formObject);
        if(formObject.email && formObject.password){
            //navigate('/sign-up/planform')
            dispatch(auth(formObject.email,formObject.password,true,formObject.checkBox));
        }
    }
    
    return(
        <FormContextProvider setFormData={setFormData} submitButtonClicked={submitButtonClicked}>
            <StyledForm autoComplete='off' onSubmit={formSubmitHandler}>
                <Email/>
                <Password/>
                <Checkbox/>
                <SubmitButton onClick={buttonClickedHandler}>Next</SubmitButton>
            </StyledForm>
        </FormContextProvider>
    )
}

