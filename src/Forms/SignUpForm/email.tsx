import React,{useState,useEffect} from 'react'
import useFormContext from '../../customHooks/useFormContext'
import Input from '../../containers/Input'
import {useSelector} from 'react-redux'

const EmailInput=()=>{
    const storedEmail=useSelector(state=>{
        return state?.emailStore.email
    })
    const [value,setValue]=useState(storedEmail);
    const [error,setError] = useState('');
    const [styleClass,setStyleClass]=useState<string>(null);
    const formData=useFormContext();
    const submitButtonClicked=formData.submitButtonClicked as boolean;
    const setFormData=formData.setFormData as Function;
    const requiredError='Email is required!';

    useEffect(() => {
        submitButtonClicked && errorValidator(value);
    },[submitButtonClicked,value]);

    const validateEmail = email =>
        /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
    email);

    function errorValidator(value:string){
        if(validateEmail(value)){
            setFormData('email',value);
            setError('');
            setStyleClass('noError-indicator');
        }
        else{
            setError(requiredError);
            setStyleClass('error-indicator');
        }
    }

    const changeHandler=(event:React.ChangeEvent<HTMLInputElement>) => {
        setValue(event.target.value.trim());
        errorValidator(event.target.value.trim());
    }

    return(
        <Input type='text' placeholder='Email' value={value} className={styleClass}
        onChangeHandler={changeHandler} error={error}/>
    )
}

export default EmailInput