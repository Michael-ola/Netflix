import React,{useState,useEffect,useCallback} from 'react'
import useFormContext from 'customHooks/useFormContext'
import Input from 'containers/Input'

const FirstName=()=>{
    const [value,setValue]=useState('');
    const [error,setError] = useState('');
    const [styleClass,setStyleClass]=useState<string | null>(null);
    const formData=useFormContext();
    const submitButtonClicked=formData?.submitButtonClicked as boolean;
    const setFormData=formData?.setFormData as Function;

    const errorValidator=useCallback((value:string)=>{
        const numberInput=/^[0-9]+$/.test(value.substring(0,3));
        if(value && numberInput===false){
            setFormData('firstName',value.trim());
            setError('')
            setStyleClass('noError-indicator');
        }
        else{
            setFormData('firstName','');
            setError('Please enter a first name')
            setStyleClass('error-indicator');
        }
    },[setFormData])

    useEffect(() => {
        submitButtonClicked && errorValidator(value);
    },[errorValidator, submitButtonClicked, value]);

    const changeHandler=(event:React.ChangeEvent<HTMLInputElement>) => {
        setValue(event.target.value);
        errorValidator(event.target.value);
    }
    
    return(
            <Input type='text' placeholder='First name' value={value} className={'input '+styleClass}
             onChangeHandler={changeHandler}  error={error}/>
    )
}

export  default FirstName;