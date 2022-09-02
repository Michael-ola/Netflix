import React,{useState,useEffect} from 'react'
import useFormContext from '../../customHooks/useFormContext'
import Input from '../../containers/Input'

const PasswordInput =()=>{
    const [value,setValue]=useState('');
    const [error,setError] = useState('');
    const [styleClass,setStyleClass]=useState<string>(null);
    const formData=useFormContext();
    const submitButtonClicked=formData.submitButtonClicked as boolean;
    const setFormData=formData.setFormData as Function;
    const requiredError='Password is required!';
    const lengthError='Your password must contain between 6 and 60 characters.';

    useEffect(() => {
        submitButtonClicked && errorValidator(value);
    },[submitButtonClicked,value]);
    
    function errorValidator(value:string){
        if(value){
            if(value.length>=6 && value.length<=60){
                setFormData('password',value);
                setError('');
                setStyleClass('noError-indicator');
            }
            else{
                setError(lengthError);
                setStyleClass('error-indicator');
            }
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
        <Input type='password' placeholder='Password' value={value} className={styleClass}
        onChangeHandler={changeHandler} error={error}/>
    )
}

export default PasswordInput