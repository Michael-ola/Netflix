import React,{useState,useEffect,useCallback} from 'react'
import useFormContext from 'customHooks/useFormContext'
import Input from 'containers/Input'

const PasswordInput =()=>{
    const [value,setValue]=useState('');
    const [error,setError] = useState('');
    const [styleClass,setStyleClass]=useState<string | null>(null);
    const formData=useFormContext();
    const submitButtonClicked=formData?.submitButtonClicked as boolean;
    const setFormData=formData?.setFormData as Function;
    const requiredError='Password is required!';
    const lengthError='Your password must contain between 6 and 60 characters.';

    const errorValidator=useCallback((value:string)=>{
        if(value){
            if(value.length>=6 && value.length<=60){
                setFormData('password',value);
                setError('');
                setStyleClass('noError-indicator');
            }
            else{
                setFormData('password','')
                setError(lengthError);
                setStyleClass('error-indicator');
            }
        }
        else{
            setError(requiredError);
            setStyleClass('error-indicator');
        }
    },[setFormData])

    useEffect(() => {
        submitButtonClicked && errorValidator(value);
    },[errorValidator, submitButtonClicked, value]);

    const changeHandler=(event:React.ChangeEvent<HTMLInputElement>) => {
        setValue(event.target.value.trim());
        errorValidator(event.target.value.trim());
    }

    return(
        <Input type='password' placeholder='Password' value={value} className={styleClass as string}
        onChangeHandler={changeHandler} error={error}/>
    )
}

export default PasswordInput