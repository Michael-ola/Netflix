import React,{useState,useEffect,useCallback} from 'react'
import useFormContext from 'customHooks/useFormContext'
import Input from 'containers/Input'
import {useSelector} from 'react-redux'
import { stateType } from 'lib/redux-store/types'

const EmailInput=()=>{
    const storedEmail=useSelector((state:stateType)=>{
        return state?.emailStore?.email
    })
    const [value,setValue]=useState(storedEmail);
    const [error,setError] = useState('');
    const [styleClass,setStyleClass]=useState<string | null>(null);
    const formData=useFormContext();
    const submitButtonClicked=formData?.submitButtonClicked as boolean;
    const setFormData=formData?.setFormData as Function;
    const requiredError='Email is required!';

    const errorValidator=useCallback((value:string)=>{
        if(validateEmail(value)){
            setFormData('email',value.trim());
            setError('');
            setStyleClass('noError-indicator');
        }
        else{
            setFormData('email','')
            setError(requiredError);
            setStyleClass('error-indicator');
        }
    },[setFormData])

    useEffect(() => {
        submitButtonClicked && errorValidator(value);
    },[errorValidator, submitButtonClicked, value]);

    const validateEmail = (email: string) =>
        /^(([^<>()[\]\\.,;:\s@\\"]+(\.[^<>()[\]\\.,;:\s@\\"]+)*)|(\\".+\\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
    email);

    const changeHandler=(event:React.ChangeEvent<HTMLInputElement>) => {
        setValue(event.target.value);
        errorValidator(event.target.value);
    }

    return(
        <Input type='text' placeholder='Email' value={value} className={styleClass as string}
        onChangeHandler={changeHandler} error={error}/>
    )
}

export default EmailInput