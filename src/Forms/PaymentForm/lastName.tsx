import React,{useState,useEffect} from 'react'
import useFormContext from '../../customHooks/useFormContext'
import Input from '../../containers/Input'

const LastName=()=>{
    const [value,setValue]=useState('');
    const [error,setError] = useState('');
    const [styleClass,setStyleClass]=useState<string>(null);
    const formData=useFormContext();
    const submitButtonClicked=formData.submitButtonClicked as boolean;
    const setFormData=formData.setFormData as Function;

    useEffect(() => {
        submitButtonClicked && errorValidator(value)
    },[submitButtonClicked,value]);


    function errorValidator(value:string){
        const numberInput=/^[0-9]+$/.test(value.substring(0,3));
        if(numberInput===false){
            setFormData('lastName',value);
            setError('')
            setStyleClass('noError-indicator');
        }
        else{
            setError('Please enter a valid last name')
            setStyleClass('error-indicator');
        }
    }

    const changeHandler=(event:React.ChangeEvent<HTMLInputElement>) => {
        setValue(event.target.value.trim());
        errorValidator(event.target.value.trim());
    }
    
    return(
            <Input type='text' placeholder='Last name' value={value} className={'input '+styleClass}
             onChangeHandler={changeHandler}  error={error}/>
    )
}

export  default LastName;