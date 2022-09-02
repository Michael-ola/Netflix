import React,{useState,useEffect} from 'react'
import {CheckBoxContainer,Error} from './style/checkBox.style'


interface CheckBoxType{
    errorMessage:string,
    setFormData:Function,
    submitButtonClicked:boolean,
    label:string,
    required?:boolean
}

export default function CheckBox({errorMessage,setFormData,submitButtonClicked,label,required}:CheckBoxType){
    const [value,setValue]=useState(false);
    const [error,setError] = useState('');

    useEffect(() => {
        if(submitButtonClicked){
            errorValidator(value);
        }
    },[submitButtonClicked,value,required]);


    function errorValidator(value:boolean){
        if(required) {
            if(value){
                setFormData('checkBox',true);
                setError('')
            }
            else{
                setFormData('checkBox',false);
                setError(errorMessage)
            }
        }
        else{
            setFormData('checkBox',value);
            setError('')
        }
    }
    
    const changeHandler=(event:React.ChangeEvent<HTMLInputElement>) => {
        setValue(event.target.checked);
        errorValidator(event.target.checked)
    }
    return(
        <>
            <CheckBoxContainer>
                <input id='checkbox' type="checkbox" checked={value} onChange={changeHandler}/>
                <label htmlFor='checkbox'>{label}</label>
            </CheckBoxContainer>
            {error &&<Error>{error}</Error>}
        </>
    )
}

