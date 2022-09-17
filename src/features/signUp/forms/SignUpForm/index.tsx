import React,{useState,useEffect} from 'react'
import FormContextProvider from 'context/formsContext'
import {Container,StyledForm} from './style/SignUpForm.style.js'
import Email from './email'
import Password from './password'
import Checkbox from './checkBox'
import SubmitButton from 'components/NextPrevButton'
import {useSelector,useDispatch} from 'react-redux'
import {auth} from 'redux-store/Actions/auth'
import {stateType} from 'redux-store/types'
import { AnyAction } from 'redux'

export default function SignUpForm({setPageUnmount}:{setPageUnmount:(state:boolean)=>void}){
    return (
        <Container>
            <Form setPageUnmount={setPageUnmount}/>
        </Container>
    )
}

const Form=({setPageUnmount}:{setPageUnmount:(state:boolean)=>void})=>{
    const [submitButtonClicked,setSubmitButtonClicked]=useState(false)
    const dispatch = useDispatch();
    const storedEmail=useSelector((state:stateType)=>{
        return state.emailStore.email
    })
    const loadingState=useSelector((state:stateType)=>{
        return state.auth.loading
    })
    const error=useSelector((state:stateType)=>{
        return state.auth.error
    })

    const token=useSelector((state:stateType)=>{
        return state.auth.token
    })

    useEffect(()=>{
        submitButtonClicked && token && setPageUnmount(true);
    },[setPageUnmount, submitButtonClicked, token])

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
        if(formObject.email && formObject.password){
            dispatch(auth(formObject.email, formObject.password, true, formObject.checkBox) as unknown as AnyAction);
        }
    }
    
    return(
        <FormContextProvider setFormData={setFormData} submitButtonClicked={submitButtonClicked}>
            <StyledForm autoComplete='off' onSubmit={formSubmitHandler}>
                <Email/>
                <Password/>
                <Checkbox/>
                <SubmitButton spinner={loadingState} onClick={buttonClickedHandler}>Next</SubmitButton>
            </StyledForm>
        </FormContextProvider>
    )
}

